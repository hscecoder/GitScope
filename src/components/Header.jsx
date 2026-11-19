const TABS = ["Dashboard", "Compare"];

function Header({ tab, setTab }) {
  return (
    <header className="border-b-2 border-[#1e1e1e] bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="GitScope logo" className="h-9 w-9" />
          <span className="pixel text-xl">Git<span className="text-[#1971c2]">Scope</span></span>
        </div>
        <nav className="flex gap-2">
          {TABS.map((name) => (
            <button key={name} onClick={() => setTab(name)}
              className={"sketch px-3 py-1 " + (tab === name ? "bg-[#ffec99] shadow-[2px_2px_0_#1e1e1e]" : "bg-white hover:bg-neutral-100")}>
              {name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
