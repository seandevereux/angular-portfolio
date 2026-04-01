import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Wave } from './wave';

describe('Wave', () => {
  let component: Wave;
  let fixture: ComponentFixture<Wave>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wave]
    }).compileComponents();

    fixture = TestBed.createComponent(Wave);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default type as header', () => {
    expect(component.type).toBe('header');
  });

  it('should have default fillColor', () => {
    expect(component.fillColor).toBe('#182A47');
  });

  it('should accept custom type input', () => {
    component.type = 'footer';
    fixture.detectChanges();
    expect(component.type).toBe('footer');
  });

  it('should accept custom fillColor input', () => {
    component.fillColor = '#FF0000';
    fixture.detectChanges();
    expect(component.fillColor).toBe('#FF0000');
  });
});
