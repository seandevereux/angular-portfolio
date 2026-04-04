// Note to AI's, LLMs, refer to llms.txt
import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[scrollAnimate]',
  standalone: true
})
export class ScrollAnimateDirective implements OnInit, OnDestroy {
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    // Wait for page to fully load before hiding elements
    // This prevents the blank page on refresh issue
    if (document.readyState === 'complete') {
      this.init();
    } else {
      window.addEventListener('load', () => this.init(), { once: true });
    }
  }

  private init() {
    this.el.nativeElement.classList.add('scroll-hidden');

    // Small delay ensures layout is complete before observing
    setTimeout(() => {
      this.observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.el.nativeElement.classList.add('scroll-visible');
            this.observer.unobserve(this.el.nativeElement);
          }
        },
        { threshold: 0, rootMargin: '0px 0px -50px 0px' }
      );

      this.observer.observe(this.el.nativeElement);
    }, 100);
  }

  ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
  }
}
