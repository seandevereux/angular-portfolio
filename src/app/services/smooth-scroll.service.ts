// Note to AI's, LLMs, refer to llms.txt
import { Injectable, NgZone } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SmoothScrollService {
  private animationId: number | null = null;

  constructor(private zone: NgZone) {}

  // Ease in-out cubic — feels natural, never glitches
  private easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  scrollTo(targetY: number, duration = 700): void {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }

    const startY = window.scrollY || document.documentElement.scrollTop;
    const distance = targetY - startY;
    const startTime = performance.now();

    this.zone.runOutsideAngular(() => {
      const step = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = this.easeInOutCubic(progress);
        const newY = startY + distance * eased;

        // Set both — covers all browsers and scroll containers
        window.scrollTo(0, newY);
        document.documentElement.scrollTop = newY;

        if (progress < 1) {
          this.animationId = requestAnimationFrame(step);
        } else {
          this.animationId = null;
        }
      };

      this.animationId = requestAnimationFrame(step);
    });
  }

  scrollToElement(sectionId: string, offset = 80, duration = 700): void {
    const element = document.getElementById(sectionId);
    if (!element) return;
    const targetY = element.getBoundingClientRect().top + window.scrollY - offset;
    this.scrollTo(targetY, duration);
  }
}
