import { Component } from '@angular/core';
import { NgFor, NgClass, NgIf } from '@angular/common';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface Project {
  title: string;
  description: string;
  stack: string;
  category: 'web' | 'game' | 'software';
  image: string;
  link?: string;
  github?: string;
}

@Component({
  selector: 'app-carousel',
  imports: [NgFor, NgClass, NgIf, ScrollAnimateDirective, FontAwesomeModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {
  faGithub = faGithub;
  activeFilter = '*';

  filters = [
    { label: 'All', value: '*' },
    { label: 'Web', value: 'web' },
    { label: 'Game', value: 'game' },
    { label: 'Software', value: 'software' },
  ];

  projects: Project[] = [
    {
      title: 'Mod Strength Dashboard',
      description: 'Built during my internship at Fidelity Investments to improve operational efficiency for moderation teams.',
      stack: 'Angular TypeScript',
      category: 'software',
      image: 'images/software1.png',
      github: 'https://github.com/seandevereux'
    },
    {
      title: 'Croi Applications',
      description: 'Developed web applications for Croi during my internship to support the organisation\'s digital operations.',
      stack: 'Angular TypeScript Node.js',
      category: 'web',
      image: 'images/web.png',
      github: 'https://github.com/seandevereux'
    },
    {
      title: 'Hop — Mobile Endless Runner',
      description: 'An endless runner mobile game inspired by Subway Surfers, built in Unity with C#.',
      stack: 'Unity C#',
      category: 'game',
      image: 'images/hopgame.PNG',
      github: 'https://github.com/seandevereux'
    },
    {
      title: 'Eco — Ecosystem Simulation',
      description: 'A functioning ecosystem simulation with wolves and rabbits as predator and prey. Built using the state design pattern and finite state machines.',
      stack: 'Unity C#',
      category: 'game',
      image: 'images/ecosimgame.PNG',
      github: 'https://github.com/seandevereux'
    },
    {
      title: 'Jump — Game Jam Entry',
      description: 'My first game jam entry. A great learning experience building a complete game under time pressure.',
      stack: 'Unity C#',
      category: 'game',
      image: 'images/jumpgame.PNG',
      github: 'https://github.com/seandevereux'
    },
    {
      title: 'Portfolio Website',
      description: 'This portfolio, migrated from Next.js to Angular 21 with Storybook, Spotify integration and scroll animations.',
      stack: 'Angular TypeScript Storybook',
      category: 'web',
      image: 'images/background.jpg',
      github: 'https://github.com/seandevereux'
    }
  ];

  get filteredProjects(): Project[] {
    if (this.activeFilter === '*') return this.projects;
    return this.projects.filter(p => p.category === this.activeFilter);
  }

  setFilter(value: string) {
    this.activeFilter = value;
  }
}
