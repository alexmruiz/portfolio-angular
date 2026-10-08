import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  // Definimos el stack para que sea fácil de actualizar
  techStack = [
    { name: 'Java', icon: 'fa-brands fa-java' },
    { name: 'Spring Boot', icon: 'fa-solid fa-leaf' },
    { name: 'PHP', icon: 'fa-brands fa-php' },
    { name: 'Angular', icon: 'fa-brands fa-angular' },
    { name: 'JavaScript', icon: 'fa-brands fa-js' },
    { name: 'SQL', icon: 'fa-solid fa-database' },
  ];

  isScrolled = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Si el scroll vertical es mayor a 50px, ocultamos la flecha
    const offset =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled.set(offset > 50);
  }
}
window.addEventListener('scroll', () => {
  document.body.classList.toggle('scrolled', window.scrollY > 50);
});
