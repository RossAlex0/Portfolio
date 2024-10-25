import { ProjectInterface } from "../../components/CardProject/type";
import projectsData from "../data/projectsData.json";

const projects = projectsData as ProjectInterface[];

export const getProjectsFormat = (format: string): ProjectInterface[] => {
  return projects.filter((project) => project.format === format);
};
