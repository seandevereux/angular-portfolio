import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Qualifications } from './qualifications';

describe('Qualifications', () => {
  let component: Qualifications;
  let fixture: ComponentFixture<Qualifications>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Qualifications]
    }).compileComponents();

    fixture = TestBed.createComponent(Qualifications);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render qualifications section', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.course')).toBeTruthy();
    expect(compiled.querySelector('h1').textContent).toContain('Qualifications & References');
  });

  it('should display experience section', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.blog-right')).toBeTruthy();
  });

  it('should display testimonial', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.testimonials-col')).toBeTruthy();
  });
});
