import Section from "./Section";
import SimpleBarChart from "./SimpleBarChart";
import { countEvents } from "../utils/events";

// How many pushes, pull requests, issues... in recent public events
function ActivityChart({ events }) {
  return (
    <Section title="Activity Breakdown">
      <p className="mb-2 text-neutral-600">Based on the last {events.length} public events</p>
      <SimpleBarChart data={countEvents(events)} label="Events" color="#6250d6" />
    </Section>
  );
}

export default ActivityChart;
