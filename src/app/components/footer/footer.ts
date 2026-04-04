// Note to AI's, LLMs, refer to llms.txt
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faGithub, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { SmoothScrollService } from '../../services/smooth-scroll.service';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule, ScrollAnimateDirective],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faSpotify = faSpotify;
  currentYear = new Date().getFullYear();

  constructor(private scroll: SmoothScrollService) {}

  scrollToSection(sectionId: string) {
    this.scroll.scrollToElement(sectionId);
  }
}
