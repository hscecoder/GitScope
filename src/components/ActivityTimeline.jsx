import Section from "./Section";
import { describeEvent } from "../utils/describe";
import { formatDate } from "../utils/format";

function ActivityTimeline({ events }) {
  return (
    <Section title="Recent Activity">
      {events.length === 0 && <p className="text-neutral-500">No recent public activity.</p>}
      <ol className="max-h-96 space-y-3 overflow-y-auto border-l-2 border-dashed border-[#1e1e1e] pl-4">
        {events.slice(0, 15).map((e) => (
          <li key={e.id} className="relative leading-tight">
            <span className="absolute -left-[23px] top-1 h-3 w-3 border-2 border-[#1e1e1e] bg-[#ffec99]" />
            <span>{describeEvent(e)} </span>
            <a href={"https://github.com/" + e.repo.name} target="_blank" className="link break-all">{e.repo.name}</a>
            <div className="text-sm text-neutral-500">{formatDate(e.created_at)}</div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default ActivityTimeline;
