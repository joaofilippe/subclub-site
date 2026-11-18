import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BenefitsSectionComponent } from './benefits-section.component';

describe('BenefitsSectionComponent', () => {
  let fixture: ComponentFixture<BenefitsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenefitsSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BenefitsSectionComponent);
    fixture.detectChanges();
  });

  it('should render all 6 benefit cards', () => {
    const cards = fixture.nativeElement.querySelectorAll('.benefit-card');
    expect(cards.length).toBe(6);
  });
});
