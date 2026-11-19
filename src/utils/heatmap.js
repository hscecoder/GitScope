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
export const LEVEL_COLORS = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];
