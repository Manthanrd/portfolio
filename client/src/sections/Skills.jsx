import "../styles/Skills.css";

import SectionTitle from "../components/ui/SectionTitle";

import SkillCard from "../components/ui/SkillCard";

import skills from "../data/skillsData";
import ZoomIn from "../components/animations/ZoomIn";


function Skills(){

return(

<section id="skills">

<SectionTitle

number="02"

title="MY TECH ARSENAL"

subtitle="Technologies I use to build modern web applications."

/>

<div className="skills-grid">

{

skills.map((skill,index)=>(

<ZoomIn delay={index * 0.1} key={index}>
    <SkillCard skill={skill} />
</ZoomIn>

))

}

</div>

</section>

);

}

export default Skills;