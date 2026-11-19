// Show big numbers nicely, e.g. 12500 -> 12.5k
export function formatNumber(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(1) + "k";
  return String(num);
}

// Show a date like "Jan 5, 2024"
export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// Chart colors used across the app
export const COLORS = ["#6366f1", "#22d3ee", "#f472b6", "#facc15", "#34d399", "#fb923c", "#a78bfa", "#f87171"];
