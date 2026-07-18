import "../styles/About.css";

import SectionTitle from "../components/ui/SectionTitle";
import InfoCard from "../components/ui/InfoCard";
import StatCard from "../components/ui/StatCard";

import aboutData from "../data/aboutData";

function About() {

  return (

<section id="about">

<SectionTitle

number="01"

title="WHO I AM"

subtitle="The developer behind the code."

/>

<div className="about-container">

<div className="about-left">

<h3>{aboutData.greeting}</h3>

<p>

{aboutData.description}

</p>

<div className="info-grid">

{aboutData.info.map((item,index)=>(

<InfoCard

key={index}

icon={item.icon}

label={item.label}

value={item.value}

/>

))}

</div>

</div>

<div className="about-right">

{aboutData.stats.map((item,index)=>(

<StatCard

key={index}

number={item.number}

title={item.title}

/>

))}

</div>

</div>

</section>

  );

}

export default About;