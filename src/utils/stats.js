// Add up stars and forks of all repositories
export function getTotals(repos) {
  let stars = 0, forks = 0;
  repos.forEach((repo) => {
    stars += repo.stargazers_count;
    forks += repo.forks_count;
  });
  return { stars, forks };
}

// Count how many repositories use each language
export function getLanguages(repos) {
  const count = {};
  repos.forEach((repo) => {
    if (repo.language) count[repo.language] = (count[repo.language] || 0) + 1;
  });
  const list = Object.keys(count).map((name) => ({ name, value: count[name] }));
  return list.sort((a, b) => b.value - a.value);
}

export const topRepos = (repos) =>
  [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 6);

export const recentRepos = (repos) =>
  [...repos].sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at)).slice(0, 6);
