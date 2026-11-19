import { LEVEL_COLORS } from "../utils/heatmap";

function HeatmapLegend() {
  return (
    <div className="mt-2 flex items-center justify-end gap-1 text-sm text-neutral-600">
      <span className="mr-1">Less</span>
      {LEVEL_COLORS.map((color) => (
        <span key={color} className="h-3 w-3" style={{ background: color }} />
      ))}
      <span className="ml-1">More</span>
    </div>
  );
}

export default HeatmapLegend;
