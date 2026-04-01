import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface Project {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-carousel',
  imports: [NgFor],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {
  projects: Project[] = [
    {
      image: 'images/hopgame.PNG',
      title: 'Hop, A mobile game',
      description: 'This game is an endless runner, currently unfinished, I aim to make this project have a similar gameplay loop to subway surfers.'
    },
    {
      image: 'images/ecosimgame.PNG',
      title: 'Eco, An ecosim game',
      description: 'I built this game after watching eco-system simulations on YouTube and wanting to try developing my own. Over around 1-2 weeks I built a functioning ecosystem featuring wolves and rabbits as predator and prey. The project taught me a lot about the state design pattern and finite state machines, as well as how to manage a larger codebase as a result of implementing one.'
    },
    {
      image: 'images/jumpgame.PNG',
      title: 'Jump,',
      description: 'My first attempt at a gamejam. this was a great learning experience and was a lot of fun.'
    }
  ];
}
