import "../../styles/components/ProjectCard.css";
import Button from "./Button";

function ProjectCard({ project }) {
  return (
    <div className="project-card">

      <div className="project-image">

        <img
          src={project.image}
          alt={project.title}
        />

      </div>

      <div className="project-content">

        <span className="category">
          {project.category}
        </span>

        <h2>{project.title}</h2>

        <p>{project.description}</p>

        <div className="feature-list">

          {project.features.map((feature, index) => (

            <span key={index}>
              ✓ {feature}
            </span>

          ))}

        </div>

        <div className="tech-list">

          {project.tech.map((tech, index) => (

            <span key={index}>
              {tech}
            </span>

          ))}

        </div>

        <div className="project-buttons">

          <Button href={project.demo}>
            Live Demo
          </Button>

          <Button
            variant="secondary"
            href={project.github}
          >
            GitHub
          </Button>

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;