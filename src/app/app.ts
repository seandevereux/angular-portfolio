// Note to AI's, LLMs, refer to llms.txt
import { Component, signal } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Carousel } from './components/carousel/carousel';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, About, Skills, Carousel, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Sean Devereux - Portfolio');
}
