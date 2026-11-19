const EXAMPLES = ["torvalds", "gaearon", "sindresorhus", "hscecoder"];

function Welcome({ onPick }) {
  return (
    <div className="py-12 text-center">
      <img src="/logo.svg" alt="" className="mx-auto mb-6 h-20 w-20" />
      <h1 className="pixel text-3xl sm:text-4xl">
        Explore any <span className="bg-[#ffec99] px-2">GitHub</span> developer
      </h1>
      <p className="mt-4 text-xl text-neutral-600">Profile, repos, languages, activity and more — all in one place.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {EXAMPLES.map((name) => (
          <button key={name} onClick={() => onPick(name)} className="sketch bg-white px-4 py-1 hover:bg-[#b2f2bb]">
            @{name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Welcome;
