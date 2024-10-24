import { ProjectPropsInterface } from "./type";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { getProjectsFormat } from "../../services/utils/filterFormat";

import chevron from "/icon/chevron.svg";

import "./CardProject.css";

export default function CardProject({ project }: ProjectPropsInterface) {
  const navigate = useNavigate();

  const [index, setIndex] = useState<number>();

  useEffect(() => {
    const response = getProjectsFormat(project.format);

    setIndex(
      response.findIndex((indexProject) => indexProject.id === project.id)
    );
  }, [project]);

  return (
    <div className="card">
      <div style={{ backgroundImage: `url(${project.image})` }} />
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <button
        type="button"
        onClick={() => navigate(`/projects/${project.format}/${index}`)}
      >
        Voir le projet <img src={chevron} alt="chevron" />
      </button>
    </div>
  );
}
