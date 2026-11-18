import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HowItWorksSectionComponent } from './how-it-works-section.component';

describe('HowItWorksSectionComponent', () => {
  let fixture: ComponentFixture<HowItWorksSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowItWorksSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HowItWorksSectionComponent);
    fixture.detectChanges();
  });

  it('should render all 3 workflow steps', () => {
    const steps = fixture.nativeElement.querySelectorAll('.step-card');
    expect(steps.length).toBe(3);
  });
});
