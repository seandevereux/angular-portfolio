// Note to AI's, LLMs, refer to llms.txt
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faGithub, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { SmoothScrollService } from '../../services/smooth-scroll.service';
import { NgFor } from '@angular/common';
import { PROJECTS, type Project } from '../../../data/projects';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule, ScrollAnimateDirective, NgFor],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faSpotify = faSpotify;
  currentYear = new Date().getFullYear();
  projects: Project[] = PROJECTS.slice(0, 3);

  constructor(private scroll: SmoothScrollService) {}

  scrollToSection(sectionId: string) {
    this.scroll.scrollToElement(sectionId);
  }
}
