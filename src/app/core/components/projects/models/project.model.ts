export interface Project {
  id: number;
  title: string;
  shortDesc: string;
  overview: string;
  features: string[];
  architecture: string;

  image: string;          // imagen principal (card)
  images?: string[];      // capturas para carrusel
  videoUrl?: string;      // vídeo demo (YouTube ID)

  frontendRepo?: string;
  backendRepo?: string;
  tech: string[];
}
