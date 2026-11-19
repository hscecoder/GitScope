import { getTotals, getLanguages } from "./stats";

// Build the rows for the comparison table
export function compareRows(a, b) {
  const totalA = getTotals(a.repos);
  const totalB = getTotals(b.repos);
  return [
    { label: "Followers", a: a.user.followers, b: b.user.followers },
    { label: "Following", a: a.user.following, b: b.user.following },
    { label: "Repositories", a: a.user.public_repos, b: b.user.public_repos },
    { label: "Total Stars", a: totalA.stars, b: totalB.stars },
    { label: "Total Forks", a: totalA.forks, b: totalB.forks },
    { label: "Languages Used", a: getLanguages(a.repos).length, b: getLanguages(b.repos).length },
  ];
}

// Colors for the two users
export const USER_COLORS = ["#3987e5", "#d95926"];
