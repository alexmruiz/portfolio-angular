import { Component, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Project } from './models/project.model';
import { ProjectCardComponent } from './projects-card/projects-card';
import { ProjectsModal } from './projects-modal/projects-modal';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, ProjectsModal],
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
      fullDesc:
        'Solución integral con microservicios, gestión en tiempo real y panel de administración.',
      image: 'assets/img/projects-img/p1.png',
      videoUrl: '8IM5K84q6EM',
      repoUrl: 'https://github.com/alexmruiz/Inventory-backend',
      tech: ['Angular', 'Spring Boot', 'MySQL', 'Docker'],
    },
  ];

  open(project: Project) {
    this.selectedProject.set(project);
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.selectedProject.set(null);
    document.body.style.overflow = 'auto';
  }
}
