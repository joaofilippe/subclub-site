import { Component } from '@angular/core';
import { FOOTER_COLUMNS } from '../../data/landing-content';
import { BrandLogoComponent } from '../../shared/components/brand-logo/brand-logo.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [BrandLogoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly columns = FOOTER_COLUMNS;
  readonly currentYear = new Date().getFullYear();
}
