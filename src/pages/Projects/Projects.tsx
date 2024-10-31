import { useState } from "react";

import CardProject from "../../components/CardProject/CardProject";

import { getProjectsFormat } from "../../services/utils/filterFormat";
import { ProjectInterface } from "../../components/CardProject/type";
import projectsData from "../../services/data/projectsData.json";

import "./projects.css";

export default function Projects() {
  const projects = projectsData as ProjectInterface[];
  const [projectFilter, setProjectFilter] = useState<
    ProjectInterface[] | undefined
  >();

  const isProject: ProjectInterface[] = projectFilter ?? projects;

  return (
    <section className="projects">
      <header className="project_header">
        <h1>Projets</h1>
      </header>
      <div className="project-buttons">
        <button
          type="button"
          className="button_switch"
          onClick={() => setProjectFilter(getProjectsFormat("mobile"))}
        >
          Mobile
        </button>
        <button
          type="button"
          className="button_switch"
          onClick={() => setProjectFilter(getProjectsFormat("web"))}
        >
          Web
        </button>
      </div>
      <div className="project_cards">
        {isProject.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
