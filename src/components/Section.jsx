// A simple card with a title, used by every dashboard block
function Section({ title, children, className = "" }) {
  return (
    <div className={"card " + className}>
      <h2 className="mb-4 text-lg font-semibold text-slate-200">{title}</h2>
      {children}
    </div>
  );
}

export default Section;
