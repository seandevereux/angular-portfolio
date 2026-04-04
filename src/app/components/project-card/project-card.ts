// Note to AI's, LLMs, refer to llms.txt
import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-project-card',
  imports: [NgIf, FontAwesomeModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() stack: string = '';
  @Input() image: string = '';
  @Input() link?: string;
  @Input() github?: string;
  
  faGithub = faGithub;
}
