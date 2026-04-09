export interface Project {
  title: string;
  description: string;
  stack: string;
  category: 'web' | 'game' | 'software';
  image: string;
  link?: string;
  github?: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'Coming Soon',
    description: 'Exciting new projects are currently in development. Check back soon to see what I\'ve been working on!',
    stack: 'TBA',
    category: 'web',
    image: 'https://via.placeholder.com/800x600/dc2626/ffffff?text=Coming+Soon',
    github: 'https://github.com/seandevereux'
  }
];
