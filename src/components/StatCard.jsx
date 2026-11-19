import { formatNumber } from "../utils/format";

function StatCard({ label, value, icon, color }) {
  return (
    <div className="card text-center transition hover:-translate-y-1" style={{ background: color }}>
      <div className="text-2xl">{icon}</div>
      <div className="pixel mt-1 text-2xl">{formatNumber(value)}</div>
      <div className="text-neutral-700">{label}</div>
    </div>
  );
}

export default StatCard;
