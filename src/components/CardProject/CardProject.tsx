import { ProjectPropsInterface } from "./type";

import chevron from "/icon/chevron.svg";

import "./CardProject.css";
import { useNavigate } from "react-router-dom";
import { getProjectsFormat } from "../../services/utils/filterFormat";
import { useEffect, useState } from "react";

export default function CardProject({ project }: ProjectPropsInterface) {
  const navigate = useNavigate();

  const [index, setIndex] = useState<number>();

  useEffect(() => {
    const response = getProjectsFormat(project.format);

    setIndex(
      response.findIndex((indexProject) => indexProject.id === project.id)
    );
  }, []);

  return (
    <div key={project.id} className="card">
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
