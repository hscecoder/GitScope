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
      <img src={user.avatar_url} alt={user.login} className="sketch h-28 w-28 rotate-[-2deg] bg-[#a5d8ff] p-1" />
      <div className="flex-1 text-center sm:text-left">
        <h1 className="pixel text-2xl">{user.name || user.login}</h1>
        <a href={user.html_url} target="_blank" className="link text-lg">@{user.login}</a>
        {user.bio && <p className="mt-2 text-lg">{user.bio}</p>}
        <div className="mt-2 flex flex-wrap justify-center gap-x-4 text-neutral-600 sm:justify-start">
          {details.map((item) => <span key={item}>{item}</span>)}
        </div>
        <ProfileLinks user={user} />
      </div>
    </div>
  );
}

export default ProfileCard;
