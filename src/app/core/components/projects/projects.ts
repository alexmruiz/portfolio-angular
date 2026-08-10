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
  styleUrl: './projects.css',
})
export class Projects {
  selectedProject = signal<Project | null>(null);

  projects: Project[] = [
    // Inventario
    {
      id: 1,
      title: 'Sistema de Control de Inventario',
      shortDesc: 'Aplicación full stack para la gestión de inventario con Angular y Spring Boot.',

      overview:
        'Aplicación web full stack orientada al control de inventario, diseñada para gestionar productos, movimientos de stock, usuarios y estadísticas en tiempo real.',

      features: [
        'Autenticación y autorización de usuarios mediante JWT y Keycloak',
        'Gestión de productos y categorías con validaciones',
        'Registro de entradas y salidas de stock',
        'Dashboard con estadísticas dinámicas y gráficas',
        'Exportación de reportes en formato Excel',
      ],

      architecture:
        'Backend desarrollado con Spring Boot exponiendo APIs REST conectadas a MySQL. Frontend construido con Angular y Angular Material. Despliegue en Google Cloud Platform mediante Docker, incluyendo Keycloak para la gestión de identidad.',

      image: 'assets/img/projects-img/imgInventory/i1.png',
      videoUrl: '8IM5K84q6EM',

      frontendRepo: 'https://github.com/alexmruiz/Front-Inventory',
      backendRepo: 'https://github.com/alexmruiz/Inventory-backend',

      tech: ['Java 17', 'Spring Boot', 'Angular', 'MySQL', 'Keycloak', 'Docker', 'GCP'],
    },
    // Reserva hoteles
    {
      id: 2,
      title: 'Aplicación de Reservas de Hoteles',
      shortDesc: 'Sistema full stack de reservas basado en microservicios.',

      overview:
        'Aplicación web full stack de reservas de hoteles desarrollada desde cero, orientada a la construcción de una arquitectura basada en microservicios escalables y mantenibles.',

      features: [
        'Gestión de hoteles, usuarios y reservas mediante microservicios independientes',
        'Uso de procedimientos almacenados en MySQL para operaciones de negocio',
        'Documentación de APIs REST con OpenAPI y Swagger',
        'Contenerización de microservicios y base de datos mediante Docker',
        'Integración completa entre frontend y backend mediante APIs REST',
      ],

      architecture:
        'Backend distribuido desarrollado con Spring Boot y arquitectura de microservicios, utilizando MySQL como sistema de persistencia y procedimientos almacenados para la lógica de negocio. Frontend construido con Angular y SCSS, con una interfaz moderna y completamente responsiva. El proyecto fue desarrollado siguiendo metodología SCRUM y buenas prácticas de diseño, documentación y despliegue.',

      image: 'assets/img/projects-img/imgHotels/buscador.png',
      images: [
        'assets/img/projects-img/imgHotels/buscador.png',
        'assets/img/projects-img/imgHotels/lista_hoteles.png',
      ],
      videoUrl: undefined, // opcional si no tienes demo

      frontendRepo: 'https://github.com/alexmruiz/front-hotels',
      backendRepo: 'https://github.com/alexmruiz/Microservicio-hotels',

      tech: [
        'Java',
        'Spring Boot',
        'Microservicios',
        'MySQL',
        'Stored Procedures',
        'OpenAPI',
        'Docker',
        'Angular',
        'SCSS',
        'SCRUM',
      ],
    },
    // Tienda AmR Laravel 
    {
      id: 3,
      title: 'Tienda AmR',
      shortDesc: 'Prototipo de tienda online desarrollada con Laravel y Livewire.',

      overview:
        'Prototipo de tienda online desarrollado con Laravel y Livewire 3, orientado a ofrecer una experiencia de compra dinámica y fluida, tanto para usuarios finales como para administradores.',

      features: [
        'Registro y autenticación de usuarios para la realización de compras',
        'Carrito de compras con gestión dinámica de productos',
        'Simulación del proceso de pago de pedidos',
        'Generación automática de facturas en PDF al finalizar la compra',
        'Panel de administración para la gestión de productos y categorías',
        'Visualización de estadísticas de ventas mediante gráficas',
        'Gestión de usuarios y asignación de roles (cliente y administrador)',
      ],

      architecture:
        'Aplicación monolítica desarrollada con Laravel, utilizando Blade y componentes Livewire 3 para implementar funcionalidades reactivas en el frontend. La persistencia de datos se realiza con MySQL, la generación de documentos PDF mediante Dompdf y la visualización de estadísticas con Chart.js. El proyecto está orientado a servir como base para una tienda online funcional y extensible.',

      image: 'assets/img/projects-img/imgEcomerce/publico.png',
      videoUrl:'t7v3UFn1XV0?si=ynS9qD9AZizhNSyV',
      frontendRepo: undefined, // no aplica en monolito
      backendRepo: 'https://github.com/alexmruiz/Shop_Online',

      tech: ['PHP', 'Laravel', 'Livewire 3', 'Blade', 'MySQL', 'Chart.js', 'Dompdf'],
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
