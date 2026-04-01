# Setup Guide

## Quick Start

1. **Install dependencies:**
   ```bash
   cd app
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```
   Open http://localhost:4200

3. **Run Storybook:**
   ```bash
   npm run storybook
   ```
   Open http://localhost:6006

4. **Run tests:**
   ```bash
   npm test
   ```

## Component Development Workflow

### Creating a New Component

1. Generate component:
   ```bash
   ng generate component components/my-component --skip-tests
   ```

2. Create Storybook story (`my-component.stories.ts`):
   ```typescript
   import type { Meta, StoryObj } from '@storybook/angular';
   import { MyComponent } from './my-component';

   const meta: Meta<MyComponent> = {
     title: 'Components/MyComponent',
     component: MyComponent,
     tags: ['autodocs'],
   };

   export default meta;
   type Story = StoryObj<MyComponent>;

   export const Default: Story = {};
   ```

3. Create test file (`my-component.spec.ts`):
   ```typescript
   import { ComponentFixture, TestBed } from '@angular/core/testing';
   import { MyComponent } from './my-component';

   describe('MyComponent', () => {
     let component: MyComponent;
     let fixture: ComponentFixture<MyComponent>;

     beforeEach(async () => {
       await TestBed.configureTestingModule({
         imports: [MyComponent]
       }).compileComponents();

       fixture = TestBed.createComponent(MyComponent);
       component = fixture.componentInstance;
       fixture.detectChanges();
     });

     it('should create', () => {
       expect(component).toBeTruthy();
     });
   });
   ```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run unit tests
- `npm run storybook` - Start Storybook
- `npm run build-storybook` - Build Storybook for deployment

## Troubleshooting

### Port already in use
If port 4200 is already in use:
```bash
npm start -- --port 4300
```

### Storybook not loading
Clear cache and reinstall:
```bash
rm -rf node_modules .angular
npm install
```

### Tests failing
Make sure all dependencies are installed:
```bash
npm install
```

## Project Standards

- All components must have a Storybook story
- All components must have at least one test
- Use the established color scheme (see README.md)
- Follow Angular style guide
- Keep components small and focused
