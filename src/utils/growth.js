// Count how many repositories were created in each year
export function reposPerYear(repos) {
  const count = {};
  repos.forEach((repo) => {
    const year = new Date(repo.created_at).getFullYear();
    count[year] = (count[year] || 0) + 1;
  });
  return Object.keys(count).map((year) => ({ name: year, value: count[year] }));
}

// Simple facts about the developer
export function getInsights(user, repos, totals) {
  const years = (Date.now() - new Date(user.created_at)) / (365 * 24 * 60 * 60 * 1000);
  const own = repos.filter((r) => !r.fork).length;
  const best = [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count)[0];
  return [
    { label: "Account age", value: years.toFixed(1) + " years" },
    { label: "Avg. stars per repo", value: repos.length ? (totals.stars / repos.length).toFixed(1) : 0 },
    { label: "Original repos", value: own + " of " + repos.length },
    { label: "Followers per repo", value: repos.length ? (user.followers / repos.length).toFixed(1) : 0 },
    { label: "Most starred repo", value: best ? best.name + " (⭐ " + best.stargazers_count + ")" : "—" },
  ];
}
