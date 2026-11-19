import Section from "./Section";
import SimpleBarChart from "./SimpleBarChart";
import { getTotals } from "../utils/stats";
import { getInsights, reposPerYear } from "../utils/growth";

function Insights({ user, repos }) {
  const insights = getInsights(user, repos, getTotals(repos));
  return (
    <Section title="Growth Insights">
      <ul className="mb-4 grid gap-2 sm:grid-cols-2">
        {insights.map((item) => (
          <li key={item.label} className="flex justify-between gap-2 rounded-lg bg-slate-800/50 px-3 py-2 text-sm">
            <span className="text-slate-400">{item.label}</span>
            <span className="truncate font-semibold">{item.value}</span>
          </li>
        ))}
      </ul>
      <p className="mb-2 text-sm text-slate-400">Repositories created per year</p>
      <SimpleBarChart data={reposPerYear(repos)} label="Repos created" color="#199e70" />
    </Section>
  );
}

export default Insights;
