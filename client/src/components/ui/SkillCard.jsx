import "../../styles/components/SkillCard.css";

function SkillCard({
    skill
}){

const Icon=skill.icon;

return(

<div className="skill-card">

<div className="skill-top">

<Icon className="skill-icon"/>

</div>

<h3>

{skill.name}

</h3>

<p>

{skill.level}

</p>

<span>

Projects : {skill.projects}

</span>

</div>

);

}

export default SkillCard;