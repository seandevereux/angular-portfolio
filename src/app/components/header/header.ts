import { Component, NgZone } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose, faList } from '@fortawesome/free-solid-svg-icons';
import { SmoothScrollService } from '../../services/smooth-scroll.service';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  faClose = faClose;
  faList = faList;
  mobileNavOpen = false;
  isSticky = false;

  constructor(private zone: NgZone, private scroll: SmoothScrollService) {
    this.zone.runOutsideAngular(() => {
      window.addEventListener('scroll', () => {
        const sticky = window.scrollY >= 100;
        if (sticky !== this.isSticky) {
          this.zone.run(() => this.isSticky = sticky);
        }
      }, { passive: true });
    });
  }

  toggleMobileNav() {
    this.mobileNavOpen = !this.mobileNavOpen;
  }

  scrollToSection(sectionId: string) {
    this.scroll.scrollToElement(sectionId);
    this.mobileNavOpen = false;
  }
}
