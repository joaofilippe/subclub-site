import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { FAQ_ITEMS } from '../../../../data/landing-content';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [MatExpansionModule, SectionHeaderComponent],
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.scss',
})
export class FaqSectionComponent {
  readonly faqItems = FAQ_ITEMS;
}
