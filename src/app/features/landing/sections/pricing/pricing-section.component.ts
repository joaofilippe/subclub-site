import { Component, computed, output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ANNUAL_DISCOUNT_RATE, PRICING_PLANS } from '../../../../data/landing-content';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { BillingCycle, PricingPlan } from '../../../../shared/models/landing.model';

export interface PlanSelectionEvent {
  plan: PricingPlan;
  billingCycle: BillingCycle;
  displayPrice: number;
}

@Component({
  selector: 'app-pricing-section',
  standalone: true,
  imports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
    SectionHeaderComponent,
  ],
  templateUrl: './pricing-section.component.html',
  styleUrl: './pricing-section.component.scss',
})
export class PricingSectionComponent {
  readonly billingCycle = signal<BillingCycle>('monthly');
  readonly isAnnual = computed(() => this.billingCycle() === 'annual');

  readonly plansWithPrices = computed(() =>
    PRICING_PLANS.map((plan) => ({
      plan,
      displayPrice: this.calculatePrice(plan.monthlyPrice, this.billingCycle()),
    })),
  );

  readonly planSelected = output<PlanSelectionEvent>();

  setBillingCycle(cycle: BillingCycle): void {
    this.billingCycle.set(cycle);
  }

  selectPlan(plan: PricingPlan, displayPrice: number): void {
    this.planSelected.emit({
      plan,
      billingCycle: this.billingCycle(),
      displayPrice,
    });
  }

  private calculatePrice(monthlyPrice: number, cycle: BillingCycle): number {
    if (cycle === 'annual') {
      return Math.round(monthlyPrice * (1 - ANNUAL_DISCOUNT_RATE));
    }
    return monthlyPrice;
  }
}
