import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { WORKFLOW_STEPS } from '../../../../data/landing-content';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-how-it-works-section',
  standalone: true,
  imports: [MatIconModule, SectionHeaderComponent],
  templateUrl: './how-it-works-section.component.html',
  styleUrl: './how-it-works-section.component.scss',
})
export class HowItWorksSectionComponent {
  readonly steps = WORKFLOW_STEPS;
}
