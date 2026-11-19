const EXAMPLES = ["torvalds", "gaearon", "sindresorhus", "hscecoder"];

function Welcome({ onPick }) {
  return (
    <div className="py-16 text-center">
      <h1 className="text-4xl font-extrabold sm:text-5xl">
        Explore any <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">GitHub developer</span>
      </h1>
      <p className="mt-4 text-slate-400">Profile, repositories, languages, activity and more — all in one place.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {EXAMPLES.map((name) => (
          <button key={name} onClick={() => onPick(name)}
            className="rounded-full border border-slate-700 px-4 py-1 text-sm text-slate-300 hover:border-indigo-500">
            @{name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Welcome;
