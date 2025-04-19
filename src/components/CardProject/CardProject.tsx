import { ProjectPropsInterface } from "./type";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import useScreenWidth from "../../services/hook/useScreenWodth";
import {
  LanguageContext,
  LanguageContextInterface,
} from "../../services/context/languageContext";
import { getProjectsFormat } from "../../services/utils/filterFormat";

import "./CardProject.css";

export default function CardProject({ project }: ProjectPropsInterface) {
  const navigate = useNavigate();
  const screenWidth = useScreenWidth();
  const { language } = useContext(LanguageContext) as LanguageContextInterface;

  const [index, setIndex] = useState<number>();

  useEffect(() => {
    const response = getProjectsFormat(project.format);

    setIndex(
      response.findIndex((indexProject) => indexProject.id === project.id)
    );
  }, [project]);

  return language ? (
    <div
      className="card"
      onClick={() =>
        screenWidth < 1024 && navigate(`/projects/${project.format}/${index}`)
      }
    >
      <div style={{ backgroundImage: `url(${project.image})` }} />
      <div className="absolute">
        <h2>{project.name}</h2>
        <button
          type="button"
          className={`button_card_${language}`}
          onClick={() => navigate(`/projects/${project.format}/${index}`)}
        >
          {language === "fr" ? (
            <>
              <i>V</i>
              <i>o</i>
              <i>i</i>
              <i>r</i>
              <i>&nbsp;</i>
              <i>l</i>
              <i>e</i>
              <i>&nbsp;</i>
              <i>p</i>
              <i>r</i>
              <i>o</i>
              <i>j</i>
              <i>e</i>
              <i>t</i>
            </>
          ) : (
            <>
              <i>V</i>
              <i>i</i>
              <i>e</i>
              <i>w</i>
              <i>&nbsp;</i>
              <i>p</i>
              <i>r</i>
              <i>o</i>
              <i>j</i>
              <i>e</i>
              <i>c</i>
              <i>t</i>
            </>
          )}
        </button>
      </div>
    </div>
  ) : undefined;
}
