import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CtaBannerSectionComponent } from './cta-banner-section.component';

describe('CtaBannerSectionComponent', () => {
  let fixture: ComponentFixture<CtaBannerSectionComponent>;
  let component: CtaBannerSectionComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaBannerSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CtaBannerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit startRequested when CTA button is clicked', () => {
    const emitSpy = spyOn(component.startRequested, 'emit');
    const button = fixture.nativeElement.querySelector('.cta-banner__actions button') as HTMLButtonElement;

    button.click();

    expect(emitSpy).toHaveBeenCalledTimes(1);
  });
});
