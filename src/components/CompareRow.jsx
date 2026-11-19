import { formatNumber } from "../utils/format";
import { USER_COLORS } from "../utils/compare";

// One metric with two bars, sized relative to each other
function CompareRow({ row }) {
  const max = Math.max(row.a, row.b, 1);
  const values = [row.a, row.b];
  return (
    <div>
      <div className="mb-1 text-neutral-600">{row.label}</div>
      {values.map((value, i) => (
        <div key={i} className="mb-1 flex items-center gap-2" title={formatNumber(value)}>
          <div className="h-4 border-2 border-[#1e1e1e]" style={{ width: (value / max) * 85 + "%", minWidth: 4, background: USER_COLORS[i] }} />
          <span className={"text-sm " + (value === max && row.a !== row.b ? "font-bold" : "text-neutral-600")}>{formatNumber(value)}</span>
        </div>
      ))}
    </div>
  );
}

export default CompareRow;
