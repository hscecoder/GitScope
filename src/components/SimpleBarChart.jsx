import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { tooltipStyle } from "./ChartTooltip";
import { formatNumber } from "../utils/format";

// One reusable bar chart: data = [{ name, value }]
function SimpleBarChart({ data, label, color = "#3987e5" }) {
  if (data.length === 0) return <p className="text-slate-500">No data available.</p>;
  return (
    <ResponsiveContainer width="100%" height={240}>
      <BarChart data={data} margin={{ left: -10 }}>
        <CartesianGrid stroke="#1e293b" vertical={false} />
        <XAxis dataKey="name" tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false} />
        <YAxis allowDecimals={false} tickFormatter={formatNumber} tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false} />
        <Tooltip {...tooltipStyle} />
        <Bar dataKey="value" name={label} fill={color} radius={[4, 4, 0, 0]} maxBarSize={40} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default SimpleBarChart;
