// Note to AI's, LLMs, refer to llms.txt
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-list-item',
  imports: [],
  templateUrl: './skill-list-item.html',
  styleUrl: './skill-list-item.css',
})
export class SkillListItem {
  @Input() name: string = '';
  @Input() description: string = '';
}
