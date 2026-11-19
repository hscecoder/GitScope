import { formatDate } from "../utils/format";
import ProfileLinks from "./ProfileLinks";

function ProfileCard({ user }) {
  const details = [
    user.location && "📍 " + user.location,
    user.company && "🏢 " + user.company,
    "📅 Joined " + formatDate(user.created_at),
  ].filter(Boolean);

  return (
    <div className="card flex h-full flex-col items-center gap-5 sm:flex-row">
      <img src={user.avatar_url} alt={user.login} className="h-28 w-28 rounded-full ring-4 ring-indigo-500/50" />
      <div className="flex-1 text-center sm:text-left">
        <h1 className="text-2xl font-bold">{user.name || user.login}</h1>
        <a href={user.html_url} target="_blank" className="text-indigo-400 hover:underline">@{user.login}</a>
        {user.bio && <p className="mt-2 text-slate-300">{user.bio}</p>}
        <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-slate-400 sm:justify-start">
          {details.map((item) => <span key={item}>{item}</span>)}
        </div>
        <ProfileLinks user={user} />
      </div>
    </div>
  );
}

export default ProfileCard;
