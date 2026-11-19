import { formatNumber } from "../utils/format";

const TILE_COLORS = ["#a5d8ff", "#b2f2bb", "#ffec99", "#ffc9c9", "#d0bfff", "#ffd8a8"];

// The GitScope branded card that gets saved as an image
function BrandCard({ user, stats, ref }) {
  return (
    <div ref={ref} className="sketch w-full max-w-[340px] bg-[#fdfcf7] p-5" style={{ fontFamily: "Patrick Hand, cursive" }}>
      <div className="flex items-center gap-4">
        <img src={user.avatar_url} crossOrigin="anonymous" alt="" className="sketch h-20 w-20 bg-[#a5d8ff] p-1" />
        <div className="min-w-0">
          <div className="pixel text-base leading-snug break-words">{user.name || user.login}</div>
          <div className="text-lg text-neutral-600">@{user.login}</div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        {stats.map((s, i) => (
          <div key={s.label} className="sketch py-1" style={{ background: TILE_COLORS[i] }}>
            <div className="pixel text-base">{formatNumber(s.value)}</div>
            <div className="text-sm">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="pixel mt-4 flex items-center justify-end gap-1 text-sm"><img src="/logo.svg" alt="" className="h-5 w-5" />GitScope</div>
    </div>
  );
}

export default BrandCard;
