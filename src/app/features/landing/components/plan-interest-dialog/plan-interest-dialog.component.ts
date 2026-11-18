import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BillingCycle, PricingPlan } from '../../../../shared/models/landing.model';

export interface PlanInterestDialogData {
  plan?: PricingPlan;
  billingCycle?: BillingCycle;
  displayPrice?: number;
}

export interface PlanInterestSubmission {
  name: string;
  email: string;
  company: string;
  planName: string;
}

@Component({
  selector: 'app-plan-interest-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './plan-interest-dialog.component.html',
  styleUrl: './plan-interest-dialog.component.scss',
})
export class PlanInterestDialogComponent {
  private readonly fb = inject(FormBuilder);
  private readonly dialogRef = inject(MatDialogRef<PlanInterestDialogComponent, PlanInterestSubmission>);
  readonly data = inject<PlanInterestDialogData | null>(MAT_DIALOG_DATA, { optional: true });

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    company: ['', [Validators.required, Validators.minLength(2)]],
  });

  get selectedPlanLabel(): string {
    if (!this.data?.plan) {
      return 'Demonstração SubClub';
    }
    const cycleLabel = this.data.billingCycle === 'annual' ? 'anual' : 'mensal';
    return `${this.data.plan.name} (R$ ${this.data.displayPrice}/mês • ${cycleLabel})`;
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, email, company } = this.form.getRawValue();
    this.dialogRef.close({
      name,
      email,
      company,
      planName: this.data?.plan?.name ?? 'Demonstração',
    });
  }
}
