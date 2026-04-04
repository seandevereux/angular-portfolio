// Note to AI's, LLMs, refer to llms.txt
import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { SpotifyTrack } from '../../services/spotify.service';

@Component({
  selector: 'app-spotify-widget',
  imports: [NgIf, FontAwesomeModule],
  templateUrl: './spotify-widget.html',
  styleUrl: './spotify-widget.css',
})
export class SpotifyWidget {
  @Input() currentTrack: SpotifyTrack | null = null;
  faSpotify = faSpotify;
}
