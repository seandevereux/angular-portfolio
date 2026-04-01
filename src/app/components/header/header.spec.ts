import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header]
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle mobile nav', () => {
    expect(component.mobileNavOpen).toBe(false);
    component.toggleMobileNav();
    expect(component.mobileNavOpen).toBe(true);
    component.toggleMobileNav();
    expect(component.mobileNavOpen).toBe(false);
  });

  it('should set sticky on scroll', () => {
    expect(component.isSticky).toBe(false);
    window.scrollTo(0, 150);
    component.onWindowScroll();
    expect(component.isSticky).toBe(true);
  });

  it('should scroll to section', () => {
    const mockElement = document.createElement('div');
    mockElement.id = 'testSection';
    document.body.appendChild(mockElement);
    
    const scrollSpy = spyOn(mockElement, 'scrollIntoView');
    component.scrollToSection('testSection');
    
    expect(scrollSpy).toHaveBeenCalledWith({ behavior: 'smooth', block: 'center' });
    document.body.removeChild(mockElement);
  });
});
