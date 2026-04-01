import { Component, HostListener, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose, faList } from '@fortawesome/free-solid-svg-icons';

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
  
  typedText = '';
  fullText = 'A multifaceted developer from Galway. Outside of software I like to read, write, play video games & I also enjoy watching UFC & boxing.';
  typingSpeed = 33; // 50 / 1.5 = 33ms for 1.5x speed
  private typingInterval: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // Start typing immediately
    setTimeout(() => {
      this.startTyping();
    }, 500);
  }

  ngOnDestroy() {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  startTyping() {
    let index = 0;
    this.typingInterval = setInterval(() => {
      if (index < this.fullText.length) {
        this.typedText += this.fullText.charAt(index);
        index++;
        this.cdr.detectChanges(); // Force change detection
      } else {
        clearInterval(this.typingInterval);
      }
    }, this.typingSpeed);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY >= 100;
  }

  toggleMobileNav() {
    this.mobileNavOpen = !this.mobileNavOpen;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      this.mobileNavOpen = false;
    }
  }
}
