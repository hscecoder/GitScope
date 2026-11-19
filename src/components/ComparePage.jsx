import CompareForm from "./CompareForm";
import CompareView from "./CompareView";
import Loader from "./Loader";
import ErrorBox from "./ErrorBox";
import { useCompare } from "../hooks/useCompare";

function ComparePage() {
  const { pair, loading, error, compare } = useCompare();
  return (
    <div className="space-y-8">
      <h1 className="pixel text-center text-3xl">Compare Developers</h1>
      <CompareForm onCompare={compare} />
      {loading && <Loader />}
      {!loading && error && <ErrorBox message={error} />}
      {!loading && pair && <CompareView pair={pair} />}
    </div>
  );
}

export default ComparePage;
