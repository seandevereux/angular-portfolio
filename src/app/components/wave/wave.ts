import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-wave',
  imports: [NgClass],
  templateUrl: './wave.html',
  styleUrl: './wave.css',
})
export class Wave {
  @Input() type: 'header' | 'about-top' | 'about-bottom' | 'footer' = 'header';
  @Input() fillColor: string = '#182A47';
}
