import { getJson, BASE } from "./github";

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
