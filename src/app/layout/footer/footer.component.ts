import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FOOTER_COLUMNS } from '../../data/landing-content';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly columns = FOOTER_COLUMNS;
  readonly currentYear = new Date().getFullYear();
}
