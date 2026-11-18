import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { PricingSectionComponent } from './pricing-section.component';

describe('PricingSectionComponent', () => {
  let fixture: ComponentFixture<PricingSectionComponent>;
  let component: PricingSectionComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingSectionComponent],
      providers: [provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(PricingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display monthly prices by default and apply 20% discount when annual is selected', () => {
    const getPrices = () =>
      Array.from(fixture.nativeElement.querySelectorAll('.plan-card__price')).map((el) =>
        (el as HTMLElement).textContent?.trim(),
      );

    expect(getPrices()).toEqual(['99', '249', '549']);

    component.setBillingCycle('annual');
    fixture.detectChanges();

    expect(getPrices()).toEqual(['79', '199', '439']);
    expect(fixture.nativeElement.querySelector('.plan-card__billing-note')).not.toBeNull();
  });

  it('should emit planSelected when a plan button is clicked', () => {
    const emitSpy = spyOn(component.planSelected, 'emit');
    const firstCta = fixture.nativeElement.querySelector('.plan-card__cta') as HTMLButtonElement;

    firstCta.click();

    expect(emitSpy).toHaveBeenCalledWith(
      jasmine.objectContaining({
        billingCycle: 'monthly',
        displayPrice: 99,
      }),
    );
  });
});
