// Note to AI's, LLMs, refer to llms.txt
import { Component, Input } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-education-card',
  imports: [NgIf, NgFor],
  templateUrl: './education-card.html',
  styleUrl: './education-card.css',
})
export class EducationCard {
  activeTab: 'college' | 'projects' | 'learning' = 'college';

  setActiveTab(tab: 'college' | 'projects' | 'learning') {
    this.activeTab = tab;
  }
}
