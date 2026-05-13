// Note to AI's, LLMs, refer to llms.txt
import { Component, ChangeDetectorRef, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('typingElement', { static: false }) typingElement?: ElementRef;
  
  faClose = faClose;
  faList = faList;
  mobileNavOpen = false;
  isSticky = false;
  typedText = '';
  
  private fullText = 'A multifaceted developer from Galway. Outside of software I like to read, write, play video games & I also enjoy watching UFC & boxing.';
  private typingSpeed = 40;
  private currentIndex = 0;
  private typingInterval?: number;

  constructor(
    private cdr: ChangeDetectorRef,
    private scroll: SmoothScrollService
  ) {}

  ngOnInit() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.handleScroll();
    this.startTyping();
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  private startTyping() {
    setTimeout(() => {
      this.typingInterval = window.setInterval(() => {
        if (this.currentIndex < this.fullText.length) {
          this.typedText += this.fullText[this.currentIndex];
          this.currentIndex++;
          this.cdr.detectChanges();
        } else {
          if (this.typingInterval) {
            clearInterval(this.typingInterval);
          }
        }
      }, this.typingSpeed);
    }, 500);
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
