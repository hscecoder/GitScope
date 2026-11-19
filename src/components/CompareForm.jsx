import { useState } from "react";

const inputClass = "input py-2";

function CompareForm({ onCompare }) {
  const [nameA, setNameA] = useState("");
  const [nameB, setNameB] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onCompare(nameA.trim(), nameB.trim());
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-2xl flex-col gap-3 sm:flex-row">
      <input value={nameA} onChange={(e) => setNameA(e.target.value)} placeholder="First username" className={inputClass} />
      <span className="pixel self-center text-neutral-500">VS</span>
      <input value={nameB} onChange={(e) => setNameB(e.target.value)} placeholder="Second username" className={inputClass} />
      <button className="btn">Compare</button>
    </form>
  );
}

export default CompareForm;
