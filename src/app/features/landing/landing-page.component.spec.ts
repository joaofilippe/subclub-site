import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  let fixture: ComponentFixture<LandingPageComponent>;
  let component: LandingPageComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageComponent, MatDialogModule, MatSnackBarModule],
      providers: [provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render all commercial landing sections', () => {
    const el: HTMLElement = fixture.nativeElement;

    expect(el.querySelector('app-navbar')).not.toBeNull();
    expect(el.querySelector('app-hero-section')).not.toBeNull();
    expect(el.querySelector('app-benefits-section')).not.toBeNull();
    expect(el.querySelector('app-how-it-works-section')).not.toBeNull();
    expect(el.querySelector('app-pricing-section')).not.toBeNull();
    expect(el.querySelector('app-faq-section')).not.toBeNull();
    expect(el.querySelector('app-cta-banner-section')).not.toBeNull();
    expect(el.querySelector('app-footer')).not.toBeNull();
  });

  it('should open PlanInterestDialogComponent when openInterestDialog is called', () => {
    const dialog = TestBed.inject(MatDialog);
    const openSpy = spyOn(dialog, 'open').and.returnValue({
      afterClosed: () => of(undefined),
    } as never);

    component.openInterestDialog();

    expect(openSpy).toHaveBeenCalledTimes(1);
  });
});
