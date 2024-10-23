import CardProject from "../../components/CardProject/CardProject";
import { ProjectInterface } from "../../components/CardProject/type";
import projectsData from "../../services/data/projectsData.json";

import "./projects.css";

export default function Projects() {
  const projects = projectsData as ProjectInterface[];

  return (
    <section className="project">
      <header className="project_header">
        <h1>Projects</h1>
      </header>
      <div className="project-buttons">
        <button type="button">Mobile</button>
        <button type="button">Web</button>
      </div>
      <div className="project_cards">
        {projects.map((project) => (
          <CardProject project={project} />
        ))}
      </div>
    </section>
  );
}
