import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { FaqSectionComponent } from './faq-section.component';

describe('FaqSectionComponent', () => {
  let fixture: ComponentFixture<FaqSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqSectionComponent],
      providers: [provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(FaqSectionComponent);
    fixture.detectChanges();
  });

  it('should render all 5 FAQ expansion panels', () => {
    const panels = fixture.nativeElement.querySelectorAll('.faq__panel');
    expect(panels.length).toBe(5);
  });
});
