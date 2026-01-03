export interface Project {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  videoUrl?: string;
  repoUrl: string;
  tech: string[];
}
