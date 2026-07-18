import "../styles/Journey.css";

import SectionTitle from "../components/ui/SectionTitle";

import TimelineCard from "../components/ui/TimelineCard";

import journey from "../data/journeyData";

function Journey(){

return(

<section id="journey">

<SectionTitle

number="04"

title="MY JOURNEY"

subtitle="Every project has been a step forward."

/>

<div className="timeline">

{

journey.map((item,index)=>(

<TimelineCard

key={index}

item={item}

/>

))

}

</div>

</section>

);

}

export default Journey;