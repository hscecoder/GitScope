import { useState } from "react";
import { getUser, getRepos, getEvents, getContributions } from "../api/github";

// Loads everything we need for one GitHub user
export function useGithub() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function search(name) {
    if (!name.trim()) return;
    setLoading(true); setError("");
    try {
      const [user, repos, events] = await Promise.all([getUser(name), getRepos(name), getEvents(name)]);
      const heatmap = await getContributions(name).catch(() => null);
      setData({ user, repos, events, heatmap });
    } catch (err) {
      setError(err.message);
      setData(null);
    }
    setLoading(false);
  }

  return { data, loading, error, search };
}
