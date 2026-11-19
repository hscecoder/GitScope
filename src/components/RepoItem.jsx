import { formatDate } from "../utils/format";

function RepoItem({ repo }) {
  return (
    <a href={repo.html_url} target="_blank" className="sketch block bg-white p-3 transition hover:bg-[#fff9db]">
      <div className="flex items-center justify-between gap-2">
        <span className="truncate text-lg font-bold text-[#1971c2]">{repo.name}</span>
        {repo.fork && <span className="text-sm text-neutral-500">fork</span>}
      </div>
      <p className="line-clamp-2 text-neutral-600">{repo.description || "No description"}</p>
      <div className="mt-1 flex flex-wrap gap-3 text-sm text-neutral-600">
        {repo.language && <span>🔵 {repo.language}</span>}
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
        <span>🕒 {formatDate(repo.pushed_at)}</span>
      </div>
    </a>
  );
}

export default RepoItem;
