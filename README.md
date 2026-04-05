Live : https://www.seandevereux.com
Vercel : https://angular-portfolio-6epo.vercel.app/


# Sean Devereux Portfolio - Angular

This is a portfolio website converted from Next.js to Angular, featuring a modern component-based architecture with Storybook integration.

## Features

- Fully responsive design
- Component-based architecture
- Storybook integration for component development
- Comprehensive test coverage
- FontAwesome icons
- Smooth scrolling navigation
- Custom carousel component
- Wave divider components  

## Color Scheme

The application uses a consistent color scheme:
- Primary: `#f44336` (Red)
- Secondary: `#182A47` (Dark Blue)
- Dark Background: `#131313`
- Text colors: White, Black, and Gray variants

## Components

### Reusable Components

1. **Wave Component** - Decorative SVG wave dividers
   - Types: header, about-top, about-bottom, footer
   - Customizable fill colors

2. **Header Component** - Navigation and hero section
   - Sticky navigation on scroll
   - Mobile responsive menu
   - Smooth scroll to sections

3. **About Component** - About section with image and text

4. **Qualifications Component** - Education, skills, and testimonials

5. **Carousel Component** - Project showcase carousel
   - Navigation buttons
   - Dot indicators
   - Auto-cycling capability

6. **Footer Component** - Site footer with links and social media

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or bun

### Installation

```bash
npm install
```

### Development Server

```bash
npm start
```

Navigate to `http://localhost:4200/`

### Build

```bash
npm run build
```

### Running Tests

```bash
npm test
```

### Storybook

View and develop components in isolation:

```bash
npm run storybook
```

Navigate to `http://localhost:6006/`

Build Storybook for production:

```bash
npm run build-storybook
```

## Project Structure

```
app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── wave/
│   │   │   │   ├── wave.ts
│   │   │   │   ├── wave.html
│   │   │   │   ├── wave.css
│   │   │   │   ├── wave.stories.ts
│   │   │   │   └── wave.spec.ts
│   │   │   ├── header/
│   │   │   ├── about/
│   │   │   ├── qualifications/
│   │   │   ├── carousel/
│   │   │   └── footer/
│   │   ├── app.ts
│   │   ├── app.html
│   │   └── app.css
│   ├── assets/
│   │   └── images/
│   ├── styles.css
│   └── index.html
├── .storybook/
│   ├── main.ts
│   └── preview.ts
└── package.json
```

## Testing

Each component includes:
- Unit tests (`.spec.ts` files)
- Storybook stories (`.stories.ts` files)

Tests cover:
- Component creation
- User interactions
- State management
- DOM rendering

## Technologies Used

- Angular 21
- TypeScript
- FontAwesome
- Storybook
- Jasmine/Karma for testing
- CSS3 with custom properties

## Migration Notes

This project was migrated from Next.js to Angular with the following improvements:
- Abstracted reusable components (Wave component for all wave dividers)
- Implemented Angular's reactive patterns
- Added comprehensive Storybook documentation
- Maintained original color scheme and design
- Enhanced mobile responsiveness

## License

All rights reserved - Sean Devereux 2022
