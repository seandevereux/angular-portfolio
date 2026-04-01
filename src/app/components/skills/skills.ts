import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpotifyService, SpotifyTrack } from '../../services/spotify.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [NgIf],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills implements OnInit, OnDestroy {
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
