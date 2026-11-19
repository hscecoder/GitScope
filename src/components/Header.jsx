const TABS = ["Dashboard", "Compare"];

function Header({ tab, setTab }) {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="GitScope logo" className="h-8 w-8" />
          <span className="text-xl font-bold">
            Git<span className="text-indigo-400">Scope</span>
          </span>
        </div>
        <nav className="flex gap-1 rounded-xl bg-slate-900 p-1">
          {TABS.map((name) => (
            <button key={name} onClick={() => setTab(name)}
              className={"rounded-lg px-4 py-1.5 text-sm " + (tab === name ? "bg-indigo-500 text-white" : "text-slate-400 hover:text-white")}>
              {name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
