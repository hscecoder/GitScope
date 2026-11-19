import ProfileCard from "./ProfileCard";
import StatCards from "./StatCards";
import LanguageChart from "./LanguageChart";
import TopReposChart from "./TopReposChart";
import Heatmap from "./Heatmap";
import Insights from "./Insights";
import RepoList from "./RepoList";
import ActivityChart from "./ActivityChart";
import ActivityTimeline from "./ActivityTimeline";
import DevCard from "./DevCard";
import { topRepos, recentRepos } from "../utils/stats";

function Dashboard({ data }) {
  const { user, repos, events, heatmap } = data;
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-3"><div className="lg:col-span-2"><ProfileCard user={user} /></div><DevCard user={user} repos={repos} /></div>
      <StatCards user={user} repos={repos} />
      <Heatmap heatmap={heatmap} />
      <div className="grid gap-6 lg:grid-cols-2"><LanguageChart repos={repos} /><TopReposChart repos={repos} /></div>
      <div className="grid gap-6 lg:grid-cols-2"><Insights user={user} repos={repos} /><ActivityChart events={events} /></div>
      <div className="grid gap-6 lg:grid-cols-3"><RepoList title="⭐ Popular Repositories" repos={topRepos(repos)} /><RepoList title="🕒 Recently Updated" repos={recentRepos(repos)} /><ActivityTimeline events={events} /></div>
    </div>
  );
}

export default Dashboard;
