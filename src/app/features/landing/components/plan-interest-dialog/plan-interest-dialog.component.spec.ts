import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { PlanInterestDialogComponent } from './plan-interest-dialog.component';

describe('PlanInterestDialogComponent', () => {
  let fixture: ComponentFixture<PlanInterestDialogComponent>;
  let component: PlanInterestDialogComponent;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<PlanInterestDialogComponent>>;

  beforeEach(async () => {
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      imports: [PlanInterestDialogComponent],
      providers: [
        provideNoopAnimations(),
        { provide: MatDialogRef, useValue: dialogRefSpy },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            plan: {
              id: 'pro',
              name: 'Pro',
              description: 'Plano Pro',
              monthlyPrice: 249,
              limits: [],
              features: [],
              ctaLabel: 'Escolher',
            },
            billingCycle: 'monthly',
            displayPrice: 249,
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PlanInterestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not close dialog when form is invalid', () => {
    component.submit();
    expect(dialogRefSpy.close).not.toHaveBeenCalled();
  });

  it('should close dialog with submission payload when form is valid', () => {
    component.form.setValue({
      name: 'Maria',
      email: 'maria@cafedonorte.com',
      company: 'Café do Norte',
    });

    component.submit();

    expect(dialogRefSpy.close).toHaveBeenCalledWith({
      name: 'Maria',
      email: 'maria@cafedonorte.com',
      company: 'Café do Norte',
      planName: 'Pro',
    });
  });
});
