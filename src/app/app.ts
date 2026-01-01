import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './core/components/navbar/navbar';
import { Footer } from './core/components/footer/footer';
import { Hero } from './hero/hero';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Hero],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('amrdev');
}
