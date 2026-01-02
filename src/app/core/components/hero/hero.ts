import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  // Definimos el stack para que sea fácil de actualizar
  techStack = [
    { name: 'Java', icon: 'fab fa-java' },
    { name: 'Spring Boot', icon: 'fas fa-leaf' },
    { name: 'PHP', icon: 'fab fa-php' },
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'SQL', icon: 'fas fa-database' }
  ];
}
  window.addEventListener('scroll', () => {
  document.body.classList.toggle('scrolled', window.scrollY > 50);
});