import "../../styles/components/SectionTitle.css";

function SectionTitle({ number, title, subtitle }) {
  return (
    <div className="section-title">
      <span className="section-number">{number}</span>

      <h2>{title}</h2>

      <p>{subtitle}</p>
    </div>
  );
}

export default SectionTitle;