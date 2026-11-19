import { USER_COLORS } from "../utils/compare";
import { getLanguages } from "../utils/stats";

// Avatar, name and top languages of one compared user
function CompareUser({ data, index }) {
  const { user, repos } = data;
  const langs = getLanguages(repos).slice(0, 5);
  return (
    <div className="card flex flex-col items-center text-center" style={{ borderColor: USER_COLORS[index] }}>
      <img src={user.avatar_url} alt={user.login} className="h-20 w-20 rounded-full" />
      <h3 className="mt-2 text-lg font-bold">{user.name || user.login}</h3>
      <a href={user.html_url} target="_blank" className="text-sm text-indigo-300 hover:underline">@{user.login}</a>
      <div className="mt-3 flex flex-wrap justify-center gap-1">
        {langs.length === 0 && <span className="text-sm text-slate-500">No languages</span>}
        {langs.map((l) => (
          <span key={l.name} className="rounded-full bg-slate-800 px-2 py-0.5 text-xs text-slate-300">{l.name} · {l.value}</span>
        ))}
      </div>
    </div>
  );
}

export default CompareUser;
