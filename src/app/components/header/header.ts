import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose, faList } from '@fortawesome/free-solid-svg-icons';
import { SmoothScrollService } from '../../services/smooth-scroll.service';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit, OnDestroy {
  faClose = faClose;
  faList = faList;
  mobileNavOpen = false;
  isSticky = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private scroll: SmoothScrollService
  ) {}

  ngOnInit() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.handleScroll();
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  private handleScroll = () => {
    const scrollPosition = window.scrollY || window.pageYOffset;
    const sticky = scrollPosition > 100;
    
    if (sticky !== this.isSticky) {
      this.isSticky = sticky;
      this.cdr.detectChanges();
    }
  };

  toggleMobileNav() {
    this.mobileNavOpen = !this.mobileNavOpen;
  }

  scrollToSection(sectionId: string) {
    this.scroll.scrollToElement(sectionId);
    this.mobileNavOpen = false;
  }
}
