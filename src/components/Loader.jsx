function Loader() {
  return (
    <div className="flex flex-col items-center gap-3 py-20 text-slate-400">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent" />
      <p>Fetching GitHub data...</p>
    </div>
  );
}

export default Loader;
