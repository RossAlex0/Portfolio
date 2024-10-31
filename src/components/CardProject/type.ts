export interface ProjectInterface {
  id: number;
  name: string;
  techno: Techno[];
  image: string;
  video: string;
  poster: string;
  format: string;
  description: string;
}

export interface ProjectPropsInterface {
  project: ProjectInterface;
}

export interface Techno {
  name: string;
  img: string;
}
