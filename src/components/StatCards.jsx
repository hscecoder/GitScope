import StatCard from "./StatCard";
import { getTotals } from "../utils/stats";

function StatCards({ user, repos }) {
  const totals = getTotals(repos);
  const stats = [
    { label: "Followers", value: user.followers, icon: "👥", color: "#a5d8ff" },
    { label: "Following", value: user.following, icon: "➡️", color: "#b2f2bb" },
    { label: "Repositories", value: user.public_repos, icon: "📦", color: "#ffec99" },
    { label: "Total Stars", value: totals.stars, icon: "⭐", color: "#ffc9c9" },
    { label: "Total Forks", value: totals.forks, icon: "🍴", color: "#d0bfff" },
    { label: "Gists", value: user.public_gists, icon: "📝", color: "#ffd8a8" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {stats.map((s) => <StatCard key={s.label} {...s} />)}
    </div>
  );
}

export default StatCards;
