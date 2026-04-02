import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpotifyService, SpotifyTrack } from '../../services/spotify.service';
import { NgIf } from '@angular/common';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-skills',
  imports: [NgIf, ScrollAnimateDirective, FontAwesomeModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills implements OnInit, OnDestroy {
  faSpotify = faSpotify;
  currentTrack: SpotifyTrack | null = null;
  private intervalId: any;

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
