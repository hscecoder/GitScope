import { formatDate } from "../utils/format";

function RepoItem({ repo }) {
  return (
    <a href={repo.html_url} target="_blank"
      className="block rounded-xl border border-slate-800 p-3 transition hover:border-indigo-500/60 hover:bg-slate-800/40">
      <div className="flex items-center justify-between gap-2">
        <span className="truncate font-semibold text-indigo-300">{repo.name}</span>
        {repo.fork && <span className="text-xs text-slate-500">fork</span>}
      </div>
      <p className="mt-1 line-clamp-2 text-sm text-slate-400">{repo.description || "No description"}</p>
      <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-400">
        {repo.language && <span>🔵 {repo.language}</span>}
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
        <span>🕒 {formatDate(repo.pushed_at)}</span>
      </div>
    </a>
  );
}

export default RepoItem;
