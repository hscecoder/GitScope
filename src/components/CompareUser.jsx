import { USER_COLORS } from "../utils/compare";
import { getLanguages } from "../utils/stats";

// Avatar, name and top languages of one compared user
function CompareUser({ data, index }) {
  const { user, repos } = data;
  const langs = getLanguages(repos).slice(0, 5);
  return (
    <div className="card flex flex-col items-center text-center" style={{ boxShadow: "5px 5px 0 " + USER_COLORS[index] }}>
      <img src={user.avatar_url} alt={user.login} className="sketch h-20 w-20 bg-white p-1" />
      <h3 className="pixel mt-2 text-lg">{user.name || user.login}</h3>
      <a href={user.html_url} target="_blank" className="link">@{user.login}</a>
      <div className="mt-3 flex flex-wrap justify-center gap-1">
        {langs.length === 0 && <span className="text-neutral-500">No languages</span>}
        {langs.map((l) => (
          <span key={l.name} className="sketch bg-[#fff9db] px-2 text-sm">{l.name} · {l.value}</span>
        ))}
      </div>
    </div>
  );
}

export default CompareUser;
