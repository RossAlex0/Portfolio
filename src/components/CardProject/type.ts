export interface ProjectInterface {
  id: number;
  name: string;
  techno: Techno[];
  image: string;
  video: string;
  poster: string;
  format: string;
  description: Translate;
}

export interface ProjectPropsInterface {
  project: ProjectInterface;
}

export interface Techno {
  name: string;
  img: string;
}

export interface Translate {
  fr: string;
  en: string;
}
