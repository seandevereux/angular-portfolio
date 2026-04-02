import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { TechMarquee } from '../tech-marquee/tech-marquee';
import { SmoothScrollService } from '../../services/smooth-scroll.service';

@Component({
  selector: 'app-about',
  imports: [ScrollAnimateDirective, TechMarquee],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  constructor(private scroll: SmoothScrollService) {}

  scrollToSection(sectionId: string) {
    this.scroll.scrollToElement(sectionId);
  }
}
