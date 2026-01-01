import { Component, signal } from '@angular/core';

interface CVItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'work' | 'education' | 'course';
}
@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [],
  templateUrl: './cv.html',
  styleUrl: './cv.css'
})
export class Cv {
  // Signal para manejar los datos de forma reactiva
  cvData = signal<CVItem[]>([
    {
      year: '2023 - Actualidad',
      title: 'Full Stack Developer',
      subtitle: 'Tech Solutions Inc.',
      description: 'Desarrollo de microservicios con Spring Boot y frontend reactivo con Angular 20.',
      type: 'work'
    },
    {
      year: '2021 - 2023',
      title: 'Grado Superior DAW',
      subtitle: 'IES Tecnológico',
      description: 'Especialización en desarrollo de aplicaciones web y despliegue en entornos cloud.',
      type: 'education'
    },
    {
      year: '2023',
      title: 'Especialista Angular Pro',
      subtitle: 'Udemy / Google Devs',
      description: 'Certificación avanzada en signals, SSR y optimización de rendimiento.',
      type: 'course'
    }
  ]);

  downloadCV() {
    window.open('assets/pdf/tu-cv.pdf', '_blank');
  }
}
