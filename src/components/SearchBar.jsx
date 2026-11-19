import { useState } from "react";

function SearchBar({ onSearch, onRefresh, showRefresh }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(name.trim());
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-xl gap-3">
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Type a GitHub username..." className="input" />
      <button className="btn">Search</button>
      {showRefresh && <button type="button" onClick={onRefresh} title="Refresh data" className="btn bg-white">⟳</button>}
    </form>
  );
}

export default SearchBar;
