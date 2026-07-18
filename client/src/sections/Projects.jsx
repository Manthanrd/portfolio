import "../styles/Projects.css";

import SectionTitle from "../components/ui/SectionTitle";
import ProjectCard from "../components/ui/ProjectCard";
import FadeLeft from "../components/animations/FadeLeft";
import projects from "../data/projectsData";

function Projects() {
  return (
    <section id="projects">

      <SectionTitle
        number="03"
        title="FEATURED WORK"
        subtitle="Projects that helped me grow as a developer."
      />

      <div className="projects-container">

        {projects.map((project, index) => (
          <FadeLeft
            key={project.id}
            delay={index * 0.2}
          >
            <ProjectCard project={project} />
          </FadeLeft>
        ))}

      </div>

    </section>
  );
}

export default Projects;