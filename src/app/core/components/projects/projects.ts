import { Component, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  videoUrl?: string; // ID de YouTube
  images?: string[];
  repoUrl: string;
  tech: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  selectedProject = signal<Project | null>(null);

  projects: Project[] = [
    {
      id: 1,
      title: 'Control de Inventario',
      shortDesc: 'Control de inventario con Angular y Spring Boot.',
      fullDesc: 'Una solución integral que incluye pasarela de pagos, gestión de inventario en tiempo real y panel de administración avanzado. Desarrollada siguiendo microservicios.',
      image: 'assets/img/p1.png',
      videoUrl: '8IM5K84q6EM?si=n-u7tkzebolazvVI', // Ejemplo ID YouTube
      repoUrl: 'https://github.com/alexmruiz/Inventory-backend',
      tech: ['Angular', 'Spring Boot', 'MySQL', 'Docker']
    },
    // Añade más proyectos aquí...
  ];

  constructor(private sanitizer: DomSanitizer) {}

  openModal(project: Project) {
    this.selectedProject.set(project);
    document.body.style.overflow = 'hidden'; // Evita scroll al estar abierto
  }

  closeModal() {
    this.selectedProject.set(null);
    document.body.style.overflow = 'auto';
  }

  getSafeVideoUrl(id: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${id}`);
  }
}
