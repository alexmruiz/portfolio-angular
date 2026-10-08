import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './core/components/navbar/navbar';
import { Footer } from './core/components/footer/footer';
import { Hero } from './core/components/hero/hero';
import { Aboutme } from './core/components/aboutme/aboutme';
import { Cv } from './core/components/cv/cv';
import { Projects } from './core/components/projects/projects';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Hero, Aboutme, Cv, Projects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('amrdev');
}
