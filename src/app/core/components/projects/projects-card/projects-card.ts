import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  templateUrl: './projects-card.html',
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
  @Output() select = new EventEmitter<void>();
}
