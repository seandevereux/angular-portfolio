// Note to AI's, LLMs, refer to llms.txt
import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { ProjectCard } from '../project-card/project-card';
import { PROJECTS, type Project } from '../../../data/projects';

@Component({
  selector: 'app-carousel',
  imports: [NgFor, NgClass, ScrollAnimateDirective, ProjectCard],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {
  activeFilter = '*';

  filters = [
    { label: 'All', value: '*' },
    { label: 'Web', value: 'web' },
    { label: 'Game', value: 'game' },
    { label: 'Software', value: 'software' },
  ];

  projects: Project[] = PROJECTS;

  get filteredProjects(): Project[] {
    if (this.activeFilter === '*') return this.projects;
    return this.projects.filter(p => p.category === this.activeFilter);
  }

  setFilter(value: string) {
    this.activeFilter = value;
  }
}
