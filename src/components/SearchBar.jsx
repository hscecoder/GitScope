import { useState } from "react";

function SearchBar({ onSearch, onRefresh, showRefresh }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(name.trim());
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-xl gap-2">
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter a GitHub username..."
        className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-indigo-500" />
      <button className="rounded-xl bg-indigo-500 px-5 font-semibold hover:bg-indigo-600">Search</button>
      {showRefresh && (
        <button type="button" onClick={onRefresh} title="Refresh data"
          className="rounded-xl border border-slate-700 px-4 hover:bg-slate-800">⟳</button>
      )}
    </form>
  );
}

export default SearchBar;
