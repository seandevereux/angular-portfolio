// Note to AI's, LLMs, refer to llms.txt
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faAngular, faNode, faGitAlt, faGithub, faJs, faPython, faDocker
} from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase, faVial } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tech-marquee',
  imports: [NgFor, FontAwesomeModule],
  templateUrl: './tech-marquee.html',
  styleUrl: './tech-marquee.css',
})
export class TechMarquee {
  marqueeItems = [
    { icon: faAngular,  label: 'Angular' },
    { icon: faJs,       label: 'TypeScript' },
    { icon: faNode,     label: 'Node.js' },
    { icon: faGitAlt,   label: 'Git' },
    { icon: faGithub,   label: 'GitHub' },
    { icon: faDocker,   label: 'Docker' },
    { icon: faPython,   label: 'Python' },
    { icon: faDatabase, label: 'MongoDB' },
    { icon: faVial,     label: 'Cypress' },
    { icon: faCode,     label: 'C#' },
  ];
}
