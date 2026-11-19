import Section from "./Section";
import SimpleBarChart from "./SimpleBarChart";
import { countEvents } from "../utils/events";

// How many pushes, pull requests, issues... in recent public events
function ActivityChart({ events }) {
  return (
    <Section title="Activity Breakdown">
      <p className="mb-2 text-sm text-slate-400">Based on the last {events.length} public events</p>
      <SimpleBarChart data={countEvents(events)} label="Events" color="#9085e9" />
    </Section>
  );
}

export default ActivityChart;
