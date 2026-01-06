import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = new Date().getFullYear();

  socials = [
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin-in',
      url: 'https://linkedin.com/in/tu-usuario',
      color: '#0077B5',
    },
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com/tu-usuario',
      color: '#F8F9FA',
    },
    {
      name: 'Discord',
      icon: 'fab fa-discord',
      url: 'https://discord.com/users/tu-id',
      color: '#5865F2',
    },
    { name: 'Email', icon: 'fas fa-envelope', url: 'mailto:tu@email.com', color: '#64FFDA' },
  ];
}
