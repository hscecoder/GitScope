// A simple card with a title, used by every dashboard block
function Section({ title, children, className = "" }) {
  return (
    <div className={"card " + className}>
      <h2 className="pixel mb-4 text-base">{title}</h2>
      {children}
    </div>
  );
}

export default Section;
