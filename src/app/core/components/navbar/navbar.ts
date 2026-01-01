import { Component, AfterViewInit, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements AfterViewInit {
  isMenuOpen = false;
  activeSection = signal<string>('inicio');

ngAfterViewInit() {
  const options = {
    root: null,
    // Con un 10% de visibilidad ya es suficiente para activarlo
    threshold: 0.1, 
    // rootMargin: el primer valor (-10% abajo) hace que se active 
    // justo antes de llegar arriba, evitando el solapamiento.
    rootMargin: "-10% 0px -70% 0px" 
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Importante: usamos isIntersecting
      if (entry.isIntersecting) {
        this.activeSection.set(entry.target.id);
        console.log('Sección activa:', entry.target.id);
      }
    });
  }, options);

  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section);
  });
}

  // Método opcional para el menú móvil
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
