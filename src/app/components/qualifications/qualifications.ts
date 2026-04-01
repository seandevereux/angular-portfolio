import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-qualifications',
  imports: [FontAwesomeModule],
  templateUrl: './qualifications.html',
  styleUrl: './qualifications.css',
})
export class Qualifications {
  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;
}
