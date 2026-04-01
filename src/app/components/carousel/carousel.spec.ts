import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Carousel } from './carousel';

describe('Carousel', () => {
  let component: Carousel;
  let fixture: ComponentFixture<Carousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carousel]
    }).compileComponents();

    fixture = TestBed.createComponent(Carousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have projects', () => {
    expect(component.projects.length).toBeGreaterThan(0);
  });

  it('should start at first slide', () => {
    expect(component.currentIndex).toBe(0);
  });

  it('should navigate to next slide', () => {
    component.nextSlide();
    expect(component.currentIndex).toBe(1);
  });

  it('should navigate to previous slide', () => {
    component.currentIndex = 1;
    component.prevSlide();
    expect(component.currentIndex).toBe(0);
  });

  it('should wrap around when going next from last slide', () => {
    component.currentIndex = component.projects.length - 1;
    component.nextSlide();
    expect(component.currentIndex).toBe(0);
  });

  it('should wrap around when going previous from first slide', () => {
    component.currentIndex = 0;
    component.prevSlide();
    expect(component.currentIndex).toBe(component.projects.length - 1);
  });

  it('should go to specific slide', () => {
    component.goToSlide(2);
    expect(component.currentIndex).toBe(2);
  });
});
