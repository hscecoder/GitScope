import { COLORS } from "../utils/format";

// Shows language name, color and repo count next to the pie chart
function LanguageLegend({ data }) {
  return (
    <ul className="w-full space-y-1 sm:w-56">
      {data.map((l, i) => (
        <li key={l.name} className="flex items-center gap-2 text-neutral-800">
          <span className="h-4 w-4 border-2 border-[#1e1e1e]" style={{ background: COLORS[i] }} />
          <span className="flex-1">{l.name}</span>
          <span className="whitespace-nowrap text-neutral-500">{l.value} repos</span>
        </li>
      ))}
    </ul>
  );
}

export default LanguageLegend;
