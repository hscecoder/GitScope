// Quick links to the user's pages on GitHub
function ProfileLinks({ user }) {
  const base = user.html_url;
  const links = [
    { label: "GitHub Profile", url: base },
    { label: "Repositories", url: base + "?tab=repositories" },
    { label: "Stars", url: base + "?tab=stars" },
    { label: "Followers", url: base + "?tab=followers" },
  ];
  if (user.blog) links.push({ label: "Website", url: user.blog.startsWith("http") ? user.blog : "https://" + user.blog });

  return (
    <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
      {links.map((link) => (
        <a key={link.label} href={link.url} target="_blank"
          className="rounded-lg border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-indigo-500 hover:text-white">
          {link.label} ↗
        </a>
      ))}
    </div>
  );
}

export default ProfileLinks;
