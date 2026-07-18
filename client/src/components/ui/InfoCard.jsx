import "../../styles/components/InfoCard.css";

function InfoCard({ icon, label, value }) {
  return (
    <div className="info-card">
      <span className="info-icon">{icon}</span>

      <div>
        <h4>{label}</h4>
        <p>{value}</p>
      </div>
    </div>
  );
}

export default InfoCard;