import { useState } from "react";

const inputClass = "min-w-0 flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-indigo-500";

function CompareForm({ onCompare }) {
  const [nameA, setNameA] = useState("");
  const [nameB, setNameB] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onCompare(nameA.trim(), nameB.trim());
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-2xl flex-col gap-2 sm:flex-row">
      <input value={nameA} onChange={(e) => setNameA(e.target.value)} placeholder="First username" className={inputClass} />
      <span className="self-center font-bold text-slate-500">VS</span>
      <input value={nameB} onChange={(e) => setNameB(e.target.value)} placeholder="Second username" className={inputClass} />
      <button className="rounded-xl bg-indigo-500 px-5 py-3 font-semibold hover:bg-indigo-600">Compare</button>
    </form>
  );
}

export default CompareForm;
