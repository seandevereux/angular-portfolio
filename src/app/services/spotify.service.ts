// Note to AI's, LLMs, refer to llms.txt
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';

export interface SpotifyTrack {
  name: string;
  artist: string;
  album: string;
  albumArt: string;
  isPlaying: boolean;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  async getCurrentlyPlaying(): Promise<SpotifyTrack | null> {
    try {
      // Call your backend API instead of Spotify directly
      const response: any = await firstValueFrom(
        this.http.get(environment.spotify.apiUrl || '/api/spotify')
      );

      if (!response || !response.isPlaying) {
        return null;
      }

      return {
        name: response.name,
        artist: response.artist,
        album: response.album,
        albumArt: response.albumArt,
        isPlaying: response.isPlaying,
        url: response.url
      };
    } catch (error) {
      console.error('Error fetching currently playing:', error);
      return null;
    }
  }
}
