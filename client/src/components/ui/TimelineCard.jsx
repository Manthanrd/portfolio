import "../../styles/components/TimelineCard.css";

function TimelineCard({ item }) {

return(

<div className="timeline-card">

<h2>{item.year}</h2>

<h3>{item.title}</h3>

<p>{item.description}</p>

</div>

);

}

export default TimelineCard;