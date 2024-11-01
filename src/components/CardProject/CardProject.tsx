import { ProjectPropsInterface } from "./type";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { getProjectsFormat } from "../../services/utils/filterFormat";

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
      <div className="absolute">
        <h2>{project.name}</h2>
        <button
          type="button"
          onClick={() => navigate(`/projects/${project.format}/${index}`)}
        >
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
        </button>
      </div>
    </div>
  );
}
