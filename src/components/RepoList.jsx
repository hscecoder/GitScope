import Section from "./Section";
import RepoItem from "./RepoItem";

function RepoList({ title, repos }) {
  return (
    <Section title={title}>
      {repos.length === 0 && <p className="text-slate-500">No repositories yet.</p>}
      <div className="grid gap-3">
        {repos.map((repo) => <RepoItem key={repo.id} repo={repo} />)}
      </div>
    </Section>
  );
}

export default RepoList;
