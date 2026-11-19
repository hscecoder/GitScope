import { formatNumber } from "../utils/format";

// The GitScope branded card that gets saved as an image
function BrandCard({ user, stats, ref }) {
  return (
    <div ref={ref} className="w-[340px] rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 p-6 text-white">
      <div className="flex items-center gap-4">
        <img src={user.avatar_url} crossOrigin="anonymous" alt="" className="h-20 w-20 rounded-full border-4 border-white/70" />
        <div className="min-w-0">
          <div className="truncate text-xl font-bold">{user.name || user.login}</div>
          <div className="text-white/80">@{user.login}</div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2 text-center">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl bg-white/15 py-2">
            <div className="text-lg font-bold">{formatNumber(s.value)}</div>
            <div className="text-xs text-white/80">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-right text-sm font-semibold tracking-wide text-white/90">🔍 GitScope</div>
    </div>
  );
}

export default BrandCard;
