// Three little pixel blocks bouncing while data loads
function Loader() {
  return (
    <div className="flex flex-col items-center gap-4 py-20 text-neutral-600">
      <div className="flex gap-2">
        {["#a5d8ff", "#ffec99", "#b2f2bb"].map((color, i) => (
          <span key={color} className="h-5 w-5 animate-bounce border-2 border-[#1e1e1e]"
            style={{ background: color, animationDelay: i * 0.15 + "s" }} />
        ))}
      </div>
      <p className="pixel text-sm">Loading...</p>
    </div>
  );
}

export default Loader;
