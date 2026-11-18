import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BENEFITS } from '../../../../data/landing-content';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-benefits-section',
  standalone: true,
  imports: [MatCardModule, MatIconModule, SectionHeaderComponent],
  templateUrl: './benefits-section.component.html',
  styleUrl: './benefits-section.component.scss',
})
export class BenefitsSectionComponent {
  readonly benefits = BENEFITS;
}
