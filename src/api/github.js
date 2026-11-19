const BASE = "https://api.github.com/users/";

// Fetch JSON and turn GitHub errors into friendly messages
async function getJson(url) {
  const res = await fetch(url, { cache: "no-store" });
  if (res.status === 404) throw new Error("User not found. Please check the username.");
  if (res.status === 403 || res.status === 429) {
    throw new Error("GitHub API rate limit reached. Please wait a while and try again.");
  }
  if (!res.ok) throw new Error("Something went wrong while talking to GitHub.");
  return res.json();
}

export const getUser = (name) => getJson(BASE + name);
export const getEvents = (name) => getJson(BASE + name + "/events/public?per_page=100");
export const getContributions = (name) =>
  getJson("https://github-contributions-api.jogruber.de/v4/" + name + "?y=last");

// Get all repositories (up to 300) page by page
export async function getRepos(name) {
  let all = [];
  for (let page = 1; page <= 3; page++) {
    const repos = await getJson(BASE + name + "/repos?per_page=100&page=" + page);
    all = all.concat(repos);
    if (repos.length < 100) break;
  }
  return all;
}
