import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { tooltipStyle } from "./ChartTooltip";
import { formatNumber } from "../utils/format";

const tick = { fill: "#525252", fontSize: 14 };

// One reusable bar chart: data = [{ name, value }]
function SimpleBarChart({ data, label, color = "#2a78d6" }) {
  if (data.length === 0) return <p className="text-neutral-500">No data available.</p>;
  return (
    <ResponsiveContainer width="100%" height={240}>
      <BarChart data={data} margin={{ left: -10 }}>
        <CartesianGrid stroke="#e7e5e4" strokeDasharray="4 4" vertical={false} />
        <XAxis dataKey="name" tick={tick} axisLine={{ stroke: "#1e1e1e", strokeWidth: 2 }} tickLine={false} />
        <YAxis allowDecimals={false} tickFormatter={formatNumber} tick={tick} axisLine={false} tickLine={false} />
        <Tooltip {...tooltipStyle} />
        <Bar dataKey="value" name={label} fill={color} stroke="#1e1e1e" strokeWidth={2} radius={[3, 3, 0, 0]} maxBarSize={40} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default SimpleBarChart;
