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
          <li key={item.label} className="sketch flex justify-between gap-2 bg-[#fff9db] px-3 py-1">
            <span className="text-neutral-600">{item.label}</span>
            <span className="truncate font-bold">{item.value}</span>
          </li>
        ))}
      </ul>
      <p className="mb-2 text-neutral-600">Repositories created per year</p>
      <SimpleBarChart data={reposPerYear(repos)} label="Repos created" color="#1baf7a" />
    </Section>
  );
}

export default Insights;
