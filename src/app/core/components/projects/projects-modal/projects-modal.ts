import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-projects-modal',
  imports: [],
  templateUrl: './projects-modal.html',
  styleUrl: './projects-modal.css',
})
export class ProjectsModal {
  @Input({ required: true }) project!: Project;
  @Output() close = new EventEmitter<void>();

  constructor(private sanitizer: DomSanitizer) {}

  get videoUrl(): SafeResourceUrl | null {
    return this.project.videoUrl
      ? this.sanitizer.bypassSecurityTrustResourceUrl(
          `https://www.youtube.com/embed/${this.project.videoUrl}`
        )
      : null;
  }
  get hasVideo(): boolean {
    return !!this.project.videoUrl;
  }

  get hasImages(): boolean {
    return !!this.project.images?.length;
  }

  activeSlide = 0;

  next() {
    if (!this.project.images) return;
    this.activeSlide = (this.activeSlide + 1) % this.project.images.length;
  }

  prev() {
    if (!this.project.images) return;
    this.activeSlide =
      (this.activeSlide - 1 + this.project.images.length) % this.project.images.length;
  }
}
