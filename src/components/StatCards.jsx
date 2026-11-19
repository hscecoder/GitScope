import StatCard from "./StatCard";
import { getTotals } from "../utils/stats";

function StatCards({ user, repos }) {
  const totals = getTotals(repos);
  const stats = [
    { label: "Followers", value: user.followers, icon: "👥" },
    { label: "Following", value: user.following, icon: "➡️" },
    { label: "Repositories", value: user.public_repos, icon: "📦" },
    { label: "Total Stars", value: totals.stars, icon: "⭐" },
    { label: "Total Forks", value: totals.forks, icon: "🍴" },
    { label: "Gists", value: user.public_gists, icon: "📝" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {stats.map((s) => <StatCard key={s.label} {...s} />)}
    </div>
  );
}

export default StatCards;
