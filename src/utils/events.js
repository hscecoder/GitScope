// Friendly names for GitHub event types
const NAMES = {
  PushEvent: "Pushes",
  PullRequestEvent: "Pull Requests",
  IssuesEvent: "Issues",
  CreateEvent: "Creates",
  WatchEvent: "Stars",
  ForkEvent: "Forks",
  IssueCommentEvent: "Comments",
};

export const eventName = (type) => NAMES[type] || "Other";

// Count events by type, for the activity chart
export function countEvents(events) {
  const count = {};
  events.forEach((e) => {
    const name = eventName(e.type);
    count[name] = (count[name] || 0) + 1;
  });
  return Object.keys(count).map((name) => ({ name, value: count[name] }));
}
