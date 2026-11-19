// Split daily contributions into weeks (columns of 7 days)
export function toWeeks(days) {
  const weeks = [];
  const firstDay = new Date(days[0].date).getUTCDay();
  let week = new Array(firstDay).fill(null);
  days.forEach((day) => {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  });
  if (week.length) weeks.push(week);
  return weeks;
}

// Green shades from no activity (0) to lots of activity (4)
export const LEVEL_COLORS = ["#1e293b", "#0e4429", "#006d32", "#26a641", "#39d353"];
