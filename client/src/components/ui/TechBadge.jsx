import "../../styles/components/TechBadge.css";

function TechBadge({ name }) {
  return (
    <span className="tech-badge">
      {name}
    </span>
  );
}

export default TechBadge;