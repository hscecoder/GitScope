import { eventName } from "./events";

// A short sentence for the activity timeline
function sentence(e) {
  const action = e.payload && e.payload.action ? e.payload.action : "";
  if (e.type === "PushEvent") return "Pushed code to";
  if (e.type === "PullRequestEvent") return action + " a pull request in";
  if (e.type === "IssuesEvent") return action + " an issue in";
  if (e.type === "IssueCommentEvent") return "Commented on an issue in";
  if (e.type === "CreateEvent") return "Created " + (e.payload.ref_type || "") + " in";
  if (e.type === "WatchEvent") return "Starred";
  if (e.type === "ForkEvent") return "Forked";
  return eventName(e.type) + " on";
}

// Make the first letter uppercase
export function describeEvent(e) {
  const text = sentence(e);
  return text.charAt(0).toUpperCase() + text.slice(1);
}
