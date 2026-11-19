import Section from "./Section";
import HeatmapLegend from "./HeatmapLegend";
import { toWeeks, LEVEL_COLORS } from "../utils/heatmap";

function Heatmap({ heatmap }) {
  if (!heatmap) return <Section title="Contribution Heatmap"><p className="text-neutral-500">Contribution data is not available right now.</p></Section>;
  const weeks = toWeeks(heatmap.contributions);
  return (
    <Section title={heatmap.total.lastYear + " contributions in the last year"}>
      <div className="overflow-x-auto pb-2">
        <div className="mx-auto flex w-max gap-[3px]">
          {weeks.map((week, i) => (
            <div key={i} className="flex flex-col gap-[3px]">
              {week.map((day, j) => day ? (
                <div key={j} title={day.count + " contributions on " + day.date}
                  className="h-3 w-3 hover:outline-2 hover:outline-[#1e1e1e]" style={{ background: LEVEL_COLORS[day.level] }} />
              ) : <div key={j} className="h-3 w-3" />)}
            </div>
          ))}
        </div>
      </div>
      <HeatmapLegend />
    </Section>
  );
}

export default Heatmap;
