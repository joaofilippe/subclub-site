import { Component, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HERO_TRUST_POINTS } from '../../../../data/landing-content';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  readonly trustPoints = HERO_TRUST_POINTS;

  readonly startRequested = output<void>();
}
