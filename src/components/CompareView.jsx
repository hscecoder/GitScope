import Section from "./Section";
import CompareUser from "./CompareUser";
import CompareRow from "./CompareRow";
import { compareRows, USER_COLORS } from "../utils/compare";

function CompareView({ pair }) {
  const [a, b] = pair;
  const rows = compareRows(a, b);
  return (
    <div className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <CompareUser data={a} index={0} />
        <CompareUser data={b} index={1} />
      </div>
      <Section title="Head to Head">
        <div className="mb-4 flex gap-4 text-sm text-slate-300">
          {[a, b].map((d, i) => <span key={i} className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm" style={{ background: USER_COLORS[i] }} />@{d.user.login}</span>)}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">{rows.map((row) => <CompareRow key={row.label} row={row} />)}</div>
      </Section>
    </div>
  );
}

export default CompareView;
