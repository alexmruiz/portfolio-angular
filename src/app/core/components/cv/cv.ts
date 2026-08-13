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
  styleUrl: './cv.css',
})
export class Cv {
  cvData = signal<CVItem[]>([
    {
      year: '11/25 - 08/26',
      title: 'Desarrollador Web Full Stack',
      subtitle: 'BeSoccer Pro',
      description:
        'Desarrollo y mantenimiento de funcionalidades para una plataforma web de alto tráfico, trabajando con PHP nativo en backend y HTML, jQuery y CSS en frontend.',
      type: 'work',
    },
    {
      year: '09/24 - 09/25',
      title: 'Desarrollador Web Full Stack',
      subtitle: 'Factoría Biz',
      description:
        'Desarrollo de nuevas funcionalidades y mantenimiento de aplicaciones web utilizando Laravel en el backend y Tailwind CSS, Alpine.js y Blade en el frontend.',
      type: 'work',
    },
    {
      year: '10/22 - 06/24',
      title: 'Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)',
      subtitle: 'Cesur',
      description:
        'Formación técnica orientada al desarrollo de aplicaciones multiplataforma, con especial enfoque en Java y bases de la programación backend.',
      type: 'education',
    },
    {
      year: '10/21 - 04/22',
      title: 'Prueba de acceso a la universidad para mayores de 25 años',
      subtitle: '',
      description: '',
      type: 'education',
    },
  ]);

  downloadCV() {
    window.open('assets/pdf/CV_ALEJANDRO_MOYA_RUIZ.pdf', '_blank');
  }
}
