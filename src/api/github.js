const BASE = "https://api.github.com/users/";
const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const headers = TOKEN ? { Authorization: "Bearer " + TOKEN } : {};

// Fetch JSON and turn GitHub errors into friendly messages
async function getJson(url, useToken = true) {
  const res = await fetch(url, { cache: "no-store", headers: useToken ? headers : {} });
  if (res.status === 404) throw new Error("User not found. Please check the username.");
  if (res.status === 403 || res.status === 429) throw new Error(rateLimitMessage(res));
  if (!res.ok) throw new Error("Something went wrong while talking to GitHub.");
  return res.json();
}

// Tell the user when the rate limit will reset
function rateLimitMessage(res) {
  const reset = res.headers.get("x-ratelimit-reset");
  if (!reset) return "GitHub API rate limit reached. Try again later.";
  const time = new Date(reset * 1000).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  return "GitHub API rate limit reached. Try again after " + time + ".";
}

export const getUser = (name) => getJson(BASE + name);
export const getEvents = (name) => getJson(BASE + name + "/events/public?per_page=100");
export const getContributions = (name) => getJson("https://github-contributions-api.jogruber.de/v4/" + name + "?y=last", false);
export { getJson, BASE };
