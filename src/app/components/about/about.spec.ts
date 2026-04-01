import { ComponentFixture, TestBed } from '@angular/core/testing';
import { About } from './about';

describe('About', () => {
  let component: About;
  let fixture: ComponentFixture<About>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About]
    }).compileComponents();

    fixture = TestBed.createComponent(About);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should scroll to section when called', () => {
    const mockElement = document.createElement('div');
    mockElement.id = 'projectsSection';
    document.body.appendChild(mockElement);
    
    const scrollSpy = spyOn(mockElement, 'scrollIntoView');
    component.scrollToSection('projectsSection');
    
    expect(scrollSpy).toHaveBeenCalledWith({ behavior: 'smooth', block: 'center' });
    document.body.removeChild(mockElement);
  });

  it('should render about section', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.about-us')).toBeTruthy();
    expect(compiled.querySelector('h1').textContent).toContain('About Me');
  });
});
