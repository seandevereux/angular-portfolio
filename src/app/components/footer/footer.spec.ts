import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Footer } from './footer';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer]
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render footer container', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.footerContainer')).toBeTruthy();
  });

  it('should have social media links', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.socialIcons')).toBeTruthy();
  });

  it('should scroll to section when called', () => {
    const mockElement = document.createElement('div');
    mockElement.id = 'homeSection';
    document.body.appendChild(mockElement);
    
    const scrollSpy = spyOn(mockElement, 'scrollIntoView');
    component.scrollToSection('homeSection');
    
    expect(scrollSpy).toHaveBeenCalledWith({ behavior: 'smooth', block: 'center' });
    document.body.removeChild(mockElement);
  });

  it('should display copyright text', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.websiteRights').textContent).toContain('Sean Devereux');
  });
});
