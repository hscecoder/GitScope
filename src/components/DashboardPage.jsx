import SearchBar from "./SearchBar";
import Loader from "./Loader";
import ErrorBox from "./ErrorBox";
import Welcome from "./Welcome";
import Dashboard from "./Dashboard";
import { useGithub } from "../hooks/useGithub";

function DashboardPage() {
  const { data, loading, error, search } = useGithub();
  return (
    <div className="space-y-8">
      <SearchBar onSearch={search} showRefresh={!!data} onRefresh={() => search(data.user.login)} />
      {loading && <Loader />}
      {!loading && error && <ErrorBox message={error} />}
      {!loading && !error && !data && <Welcome onPick={search} />}
      {!loading && data && <Dashboard data={data} />}
    </div>
  );
}

export default DashboardPage;
