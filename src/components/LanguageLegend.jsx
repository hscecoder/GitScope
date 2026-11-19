import { COLORS } from "../utils/format";

// Shows language name, color and repo count next to the pie chart
function LanguageLegend({ data }) {
  return (
    <ul className="w-full space-y-1 text-sm sm:w-56">
      {data.map((l, i) => (
        <li key={l.name} className="flex items-center gap-2 text-slate-300">
          <span className="h-3 w-3 rounded-sm" style={{ background: COLORS[i] }} />
          <span className="flex-1">{l.name}</span>
          <span className="whitespace-nowrap text-slate-400">{l.value} repos</span>
        </li>
      ))}
    </ul>
  );
}

export default LanguageLegend;
