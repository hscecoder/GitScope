import { useState } from "react";
import { getUser, getRepos } from "../api/github";

// Loads profile + repositories for one user
async function loadUser(name) {
  const [user, repos] = await Promise.all([getUser(name), getRepos(name)]);
  return { user, repos };
}

// Loads two users at the same time for comparison
export function useCompare() {
  const [pair, setPair] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function compare(nameA, nameB) {
    if (!nameA || !nameB) return setError("Please enter two usernames.");
    setLoading(true); setError("");
    try { setPair(await Promise.all([loadUser(nameA), loadUser(nameB)])); }
    catch (err) { setError(err.message); setPair(null); }
    setLoading(false);
  }

  return { pair, loading, error, compare };
}
