import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";

import { ProjectInterface } from "../../../components/CardProject/type";
import {
  LanguageContext,
  LanguageContextInterface,
} from "../../../services/context/languageContext";
import useScreenWidth from "../../../services/hook/useScreenWodth";

import chevron from "/icon/whitechevron.svg";
import "../webMobile.css";

export default function ProjectsWeb() {
  const navigate = useNavigate();
  const projectData = useLoaderData() as ProjectInterface[];
  const screenWidth = useScreenWidth();
  const params = useParams();
  const { language } = useContext(LanguageContext) as LanguageContextInterface;

  const [projectIndex, setProjectIndex] = useState<number>(
    params.id ? parseInt(params.id) : 0
  );

  const visibleProject: ProjectInterface = projectData[projectIndex];

  const handleClickNext = () =>
    projectIndex < projectData.length - 1
      ? setProjectIndex(projectIndex + 1)
      : null;
  const handleClickPrev = () =>
    projectIndex > 0 ? setProjectIndex(projectIndex - 1) : null;

  return (
    language && (
      <div className="project">
        <button
          type="button"
          className="project_back"
          onClick={() => navigate("/projects")}
        >
          <img src={chevron} alt="chevron" />
          {screenWidth < 720 ? "" : "Retour"}
        </button>
        <h2>{visibleProject?.name}</h2>
        <p>
          {visibleProject.description[language]}
          {visibleProject.link && " -- "}
          {visibleProject.link && (
            <a href={visibleProject.link} target="_blank">
              {visibleProject.link}
            </a>
          )}
          {visibleProject.link && " -- "}
        </p>
        <div className="project_mobile">
          <div className="project_movie_mobile">
            <iframe
              width="100%"
              height="100%"
              src={visibleProject?.video}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ overflow: "hidden", borderRadius: 22 }}
            />
          </div>
          <div className="project_techno_mobile">
            <div className="techno_border_mobile">
              {visibleProject?.techno.map((language) => (
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
    )
  );
}
