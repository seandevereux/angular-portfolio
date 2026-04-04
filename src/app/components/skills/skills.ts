// Note to AI's, LLMs, refer to llms.txt
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpotifyService, SpotifyTrack } from '../../services/spotify.service';
import { NgFor } from '@angular/common';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { SpotifyWidget } from '../spotify-widget/spotify-widget';
import { EducationCard } from '../education-card/education-card';
import { SkillListItem } from '../skill-list-item/skill-list-item';

@Component({
  selector: 'app-skills',
  imports: [NgFor, ScrollAnimateDirective, SpotifyWidget, EducationCard, SkillListItem],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills implements OnInit, OnDestroy {
  currentTrack: SpotifyTrack | null = null;
  private intervalId: any;

  careerHighlights = [
    {
      name: '5+ Years',
      description: 'Freelancing and building custom solutions'
    },
    {
      name: '3+ Years',
      description: 'Professional software development experience'
    },
    {
      name: 'Enterprise Scale',
      description: 'Building apps serving millions of users at Fidelity'
    },
    {
      name: '4 Distinctions',
      description: 'GTI QQI Level 5 Digital Media & Games Development'
    },
    {
      name: 'Based in Galway',
      description: 'Open to remote and hybrid opportunities'
    }
  ];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {
    this.updateNowPlaying();
    // Update every 30 seconds
    this.intervalId = setInterval(() => {
      this.updateNowPlaying();
    }, 30000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  async updateNowPlaying() {
    this.currentTrack = await this.spotifyService.getCurrentlyPlaying();
  }
}
