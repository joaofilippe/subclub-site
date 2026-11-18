import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FooterComponent } from '../../layout/footer/footer.component';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import {
  PlanInterestDialogComponent,
  PlanInterestDialogData,
  PlanInterestSubmission,
} from './components/plan-interest-dialog/plan-interest-dialog.component';
import { BenefitsSectionComponent } from './sections/benefits/benefits-section.component';
import { CtaBannerSectionComponent } from './sections/cta-banner/cta-banner-section.component';
import { FaqSectionComponent } from './sections/faq/faq-section.component';
import { HeroSectionComponent } from './sections/hero/hero-section.component';
import { HowItWorksSectionComponent } from './sections/how-it-works/how-it-works-section.component';
import { PlanSelectionEvent, PricingSectionComponent } from './sections/pricing/pricing-section.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroSectionComponent,
    BenefitsSectionComponent,
    HowItWorksSectionComponent,
    PricingSectionComponent,
    FaqSectionComponent,
    CtaBannerSectionComponent,
    FooterComponent,
  ],
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {
  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);

  openInterestDialog(selection?: PlanSelectionEvent): void {
    const data: PlanInterestDialogData | undefined = selection
      ? {
          plan: selection.plan,
          billingCycle: selection.billingCycle,
          displayPrice: selection.displayPrice,
        }
      : undefined;

    const ref = this.dialog.open<
      PlanInterestDialogComponent,
      PlanInterestDialogData,
      PlanInterestSubmission
    >(PlanInterestDialogComponent, {
      data,
      maxWidth: '92vw',
    });

    ref.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }

      this.snackBar.open(
        `Solicitação recebida para ${result.company} (${result.planName}). Em breve entraremos em contato!`,
        'Fechar',
        { duration: 5000 },
      );
    });
  }
}
