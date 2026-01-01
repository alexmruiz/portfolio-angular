import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  // Definimos el stack para que sea fácil de actualizar
  techStack = [
    { name: 'Java', icon: 'fab fa-java' },
    { name: 'Spring Boot', icon: 'fas fa-leaf' }, // Representación común de Spring
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'SQL', icon: 'fas fa-database' }
  ];
}
