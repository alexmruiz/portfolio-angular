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
      url: 'https://www.linkedin.com/in/alejandro-moya-ruiz/',
      color: '#0077B5',
    },
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com/alexmruiz',
      color: '#F8F9FA',
    },
    {
      name: 'Discord',
      icon: 'fab fa-discord',
      url: 'https://discord.com/users/alemruiz',
      color: '#5865F2',
    },
    {
      name: 'Email',
      icon: 'fas fa-envelope',
      url: 'mailto:alexmyruiz@gmail.com',
      color: '#64FFDA',
    },
  ];
}
