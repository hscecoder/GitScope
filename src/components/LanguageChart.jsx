import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import Section from "./Section";
import { getLanguages } from "../utils/stats";
import { COLORS } from "../utils/format";
import { tooltipStyle } from "./ChartTooltip";
import LanguageLegend from "./LanguageLegend";

function LanguageChart({ repos }) {
  const langs = getLanguages(repos);
  const data = langs.slice(0, 7);
  const rest = langs.slice(7).reduce((sum, l) => sum + l.value, 0);
  if (rest > 0) data.push({ name: "Other", value: rest });

  return (
    <Section title="Language Distribution">
      {data.length === 0 ? <p className="text-slate-500">No language data.</p> : (
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={data} dataKey="value" nameKey="name" innerRadius={55} outerRadius={90} paddingAngle={2} stroke="#0f172a" strokeWidth={2}>
                {data.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
              </Pie>
              <Tooltip {...tooltipStyle} />
            </PieChart>
          </ResponsiveContainer>
          <LanguageLegend data={data} />
        </div>
      )}
    </Section>
  );
}

export default LanguageChart;
