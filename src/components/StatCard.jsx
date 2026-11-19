import { formatNumber } from "../utils/format";

function StatCard({ label, value, icon }) {
  return (
    <div className="card text-center transition hover:-translate-y-1 hover:border-indigo-500/60">
      <div className="text-2xl">{icon}</div>
      <div className="mt-1 text-2xl font-bold">{formatNumber(value)}</div>
      <div className="text-sm text-slate-400">{label}</div>
    </div>
  );
}

export default StatCard;
