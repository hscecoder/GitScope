import Section from "./Section";
import { describeEvent } from "../utils/describe";
import { formatDate } from "../utils/format";

function ActivityTimeline({ events }) {
  return (
    <Section title="Recent Activity">
      {events.length === 0 && <p className="text-slate-500">No recent public activity.</p>}
      <ol className="max-h-80 space-y-3 overflow-y-auto border-l border-slate-700 pl-4">
        {events.slice(0, 15).map((e) => (
          <li key={e.id} className="relative text-sm">
            <span className="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full bg-indigo-500" />
            <span className="text-slate-300">{describeEvent(e)} </span>
            <a href={"https://github.com/" + e.repo.name} target="_blank" className="text-indigo-300 hover:underline">{e.repo.name}</a>
            <div className="text-xs text-slate-500">{formatDate(e.created_at)}</div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default ActivityTimeline;
