import { Component, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HERO_METRICS, HERO_TRUST_POINTS } from '../../../../data/landing-content';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  readonly trustPoints = HERO_TRUST_POINTS;
  readonly metrics = HERO_METRICS;

  readonly startRequested = output<void>();
}
