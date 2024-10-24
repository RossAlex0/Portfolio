import { useNavigate } from "react-router-dom";
import CardProject from "../../components/CardProject/CardProject";
import { ProjectInterface } from "../../components/CardProject/type";
import projectsData from "../../services/data/projectsData.json";

import "./projects.css";

export default function Projects() {
  const projects = projectsData as ProjectInterface[];
  const navigate = useNavigate();

  return (
    <section className="projects">
      <header className="project_header">
        <h1>Projects</h1>
      </header>
      <div className="project-buttons">
        <button type="button" onClick={() => navigate("/projects/mobile")}>
          Mobile
        </button>
        <button type="button" onClick={() => navigate("/projects/web")}>
          Web
        </button>
      </div>
      <div className="project_cards">
        {projects.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
