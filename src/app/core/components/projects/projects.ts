import { Component, signal } from '@angular/core';
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
    // StayBook
    {
      id: 2,
      title: 'StayBook · Plataforma Backend de Reservas Hoteleras',
      shortDesc: 'Plataforma backend de reservas hoteleras construida con Java y Spring Boot.',

      overview:
        'StayBook modela el flujo de reservas hoteleras mediante microservicios independientes para el catálogo, la disponibilidad y las reservas, las valoraciones y los usuarios. El proyecto pone el foco en límites de servicio claros, comunicación HTTP, seguridad basada en JWT y contratos REST documentados con OpenAPI. Es un proyecto de portfolio en evolución: sus capacidades actuales se distinguen de los requisitos pendientes para un despliegue productivo.',

      features: [
        'Hotels: catálogo de hoteles, ciudades y servicios; integra reseñas y valoraciones',
        'Booking: disponibilidad y ciclo de vida de reservas, asociadas al usuario autenticado',
        'Reviews: gestión de reseñas y resúmenes de valoraciones por hotel',
        'Auth: registro, inicio de sesión con JWT y gestión del perfil propio',
        'Gateway: enrutamiento y validación de JWT; la importación de ciudades requiere ROLE_ADMIN',
        'Config Server: configuración externa para los servicios que la habilitan',
        'API REST documentada con OpenAPI; pruebas con JUnit, Spring Boot Test y H2',
      ],

      architecture:
        'Microservicios Java independientes detrás de un Gateway, con bases de datos aisladas y comunicación HTTP. La configuración y el despliegue descritos corresponden al estado de desarrollo del proyecto.',

      architectureSections: [
        {
          title: 'Servicios y puertos',
          description:
            'Gateway 8090 · Hotels 8080 · Reviews 8081 · Booking 8082 · Auth 8083 · Config Server 8888.',
        },
        {
          title: 'Datos y comunicación',
          description:
            'Cada servicio de dominio tiene su propia base PostgreSQL: hotels_db, reviews_db, booking_db y auth_db. Booking consulta Hotels y Reviews con RestClient; Hotels consulta Reviews con OpenFeign. Las entidades JPA y los datos no se comparten entre servicios.',
        },
        {
          title: 'Seguridad y documentación',
          description:
            'El Gateway requiere un Bearer JWT salvo para registro e inicio de sesión. La importación de ciudades requiere ROLE_ADMIN. Las API cuentan con contratos OpenAPI y Swagger UI; Resilience4j aporta tolerancia a fallos.',
        },
        {
          title: 'Estado de desarrollo',
          description:
            'Config Server es opcional en los servicios que lo declaran. Hotels, Booking y Reviews usan ddl-auto=create-drop; Auth usa update. Hay Dockerfiles para Hotels y Reviews, pero no una orquestación completa. Antes de producción faltan migraciones versionadas, gestión segura de secretos y despliegue integral. GitHub Actions ejecuta Maven verify y SonarCloud, que requiere el secreto SONAR_TOKEN.',
        },
      ],

      image: 'assets/img/projects-img/imgStaybook/booking.png',
      images: [
        'assets/img/projects-img/imgStaybook/booking.png',
        'assets/img/projects-img/imgStaybook/amenities.png',
        'assets/img/projects-img/imgStaybook/reviews.png',
        'assets/img/projects-img/imgStaybook/diagrama_staybook.png',
      ],
      videoUrl: undefined, // opcional si no tienes demo

      backendRepo: 'https://github.com/alexmruiz/staybook-microservices',

      tech: [
        'Java 21',
        'Spring Boot',
        'Spring Cloud',
        'Spring Web + Validation',
        'Spring Data JPA',
        'PostgreSQL',
        'Spring Security + JWT',
        'Gateway + OpenFeign + RestClient',
        'Resilience4j',
        'Springdoc OpenAPI',
        'JUnit + Spring Boot Test + H2',
        'GitHub Actions + SonarCloud',
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
      videoUrl: 't7v3UFn1XV0?si=ynS9qD9AZizhNSyV',
      frontendRepo: undefined, // no aplica en monolito
      backendRepo: 'https://github.com/alexmruiz/Shop_Online',

      tech: ['PHP', 'Laravel', 'Livewire 3', 'Blade', 'MySQL', 'Chart.js', 'Dompdf', 'Lang', 'Laravel Cashier', 'Test'],
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
