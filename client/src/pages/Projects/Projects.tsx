import CardProject from "../../components/CardProject/CardProject";
import { ProjectInterface } from "../../components/CardProject/type";
import projectsData from "../../services/data/projectsData.json";

import chevron from "/icon/whitechevron.svg";
import "./projects.css";
import { useRef, useState } from "react";
import { getProjectsFormat } from "../../services/utils/filterFormat";

export default function Projects() {
  const projects = projectsData as ProjectInterface[];
  const [projectFilter, setProjectFilter] = useState<
    ProjectInterface[] | undefined
  >();

  const isProject: ProjectInterface[] = projectFilter ?? projects;

  const [position, setPosition] = useState<number>(0);

  const intervalIdRef = useRef<number>(0);

  const handleMouseMore = () => {
    intervalIdRef.current = window.setInterval(() => {
      setPosition((prevPosition) => {
        if (prevPosition === 0) {
          handleMouseLeave();
          return 0;
        }
        return prevPosition + 10;
      });
    }, 100);
  };
  const handleMouseLess = () => {
    intervalIdRef.current = window.setInterval(() => {
      setPosition((prevPosition) => {
        if (prevPosition === -230) {
          handleMouseLeave();
          return -230;
        }
        return prevPosition - 10;
      });
    }, 100);
  };

  const handleMouseLeave = () => {
    clearInterval(intervalIdRef.current);
  };

  return (
    <section className="projects">
      <header className="project_header">
        <h1>Projects</h1>
      </header>
      <div className="project-buttons">
        <button
          type="button"
          className="button_arrow"
          onMouseDown={handleMouseMore}
          onMouseUp={handleMouseLeave}
          onMouseLeave={handleMouseLeave}
        >
          <img src={chevron} alt="arrow" className="rotate" />
        </button>
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
        <button
          type="button"
          className="button_arrow"
          onMouseDown={handleMouseLess}
          onMouseUp={handleMouseLeave}
          onMouseLeave={handleMouseLeave}
        >
          <img src={chevron} alt="arrow" />
        </button>
      </div>
      <div className="project_cards">
        {isProject.map((project) => (
          <CardProject
            key={project.id}
            project={project}
            style={{
              transform: `translateX(${position}%)`,
              transition: "transform 2s ease-out",
            }}
          />
        ))}
      </div>
    </section>
  );
}
