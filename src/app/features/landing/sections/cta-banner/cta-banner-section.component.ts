import { Component, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cta-banner-section',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './cta-banner-section.component.html',
  styleUrl: './cta-banner-section.component.scss',
})
export class CtaBannerSectionComponent {
  readonly startRequested = output<void>();
}
