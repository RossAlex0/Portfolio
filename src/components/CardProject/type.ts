export interface ProjectInterface {
  id: number;
  name: string;
  techno: string[];
  image: string;
  video: string;
  format: string;
  description: string;
}

export interface ProjectPropsInterface {
  project: ProjectInterface;
}
