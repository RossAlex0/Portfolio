import { ProjectPropsInterface } from "./type";

import chevron from "../../../public/icon/chevron.svg";

import "./CardProject.css";

export default function CardProject({ project }: ProjectPropsInterface) {
  return (
    <div key={project.id} className="card">
      <div style={{ backgroundImage: `url(${project.image})` }} />
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <button type="button">
        Voir le projet <img src={chevron} alt="chevron" />
      </button>
    </div>
  );
}
