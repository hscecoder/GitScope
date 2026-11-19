import Section from "./Section";
import SimpleBarChart from "./SimpleBarChart";
import { topRepos } from "../utils/stats";

// Popularity overview: stars of the most starred repositories
function TopReposChart({ repos }) {
  const data = topRepos(repos).map((r) => ({ name: r.name.slice(0, 12), value: r.stargazers_count }));
  return (
    <Section title="Popularity Overview (Stars)">
      <SimpleBarChart data={data} label="Stars" />
    </Section>
  );
}

export default TopReposChart;
