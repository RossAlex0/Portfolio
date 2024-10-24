import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";

import { ProjectInterface } from "../../../components/CardProject/type";

import chevron from "/icon/whitechevron.svg";
import "../webMobile.css";

export default function ProjectsWeb() {
  const navigate = useNavigate();
  const projectData = useLoaderData() as ProjectInterface[];

  const [projectIndex, setProjectIndex] = useState<number>(0);

  const visibleProject: ProjectInterface = projectData[projectIndex];

  const handleClickNext = () =>
    projectIndex < projectData.length - 1
      ? setProjectIndex(projectIndex + 1)
      : null;
  const handleClickPrev = () =>
    projectIndex > 0 ? setProjectIndex(projectIndex - 1) : null;

  return (
    <div className="project">
      <button
        type="button"
        className="project_back"
        onClick={() => navigate("/projects")}
      >
        <img src={chevron} alt="chevron" />
        Retour
      </button>
      <h2>{visibleProject.name}</h2>
      <p>{visibleProject.description}</p>
      <div className="project_web">
        <div className="project_movie"></div>
        <div className="project_techno">
          <div className="techno_border">
            {visibleProject.techno.map((language) => (
              <div key={language.name}>
                <img src={`${language.img}`} alt="technologies" />
                <p>{language.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="project_button">
        <button type="button" onClick={handleClickPrev}>
          <img src={chevron} alt="chevron" />
          Projet précèdent
        </button>
        <button type="button" onClick={handleClickNext}>
          Projet suivant
          <img src={chevron} alt="chevron" />
        </button>
      </div>
    </div>
  );
}
