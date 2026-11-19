import { useRef } from "react";
import Section from "./Section";
import BrandCard from "./BrandCard";
import { getTotals, getLanguages } from "../utils/stats";
import { downloadImage } from "../utils/download";

function DevCard({ user, repos }) {
  const cardRef = useRef(null);
  const totals = getTotals(repos);
  const lang = getLanguages(repos)[0] || { name: "Language", value: 0 };
  const stats = [
    { label: "Followers", value: user.followers }, { label: "Repos", value: user.public_repos },
    { label: "Stars", value: totals.stars }, { label: "Forks", value: totals.forks },
    { label: "Following", value: user.following }, { label: lang.name + " repos", value: lang.value },
  ];

  return (
    <Section title="Developer Card" className="flex flex-col items-center">
      <BrandCard user={user} stats={stats} ref={cardRef} />
      <button onClick={() => downloadImage(cardRef.current, user.login + "-gitscope.png")}
        className="mt-4 rounded-xl bg-indigo-500 px-5 py-2 font-semibold hover:bg-indigo-600">⬇ Download PNG</button>
    </Section>
  );
}

export default DevCard;
