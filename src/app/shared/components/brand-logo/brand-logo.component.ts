import { Component, input } from '@angular/core';

@Component({
  selector: 'app-brand-logo',
  standalone: true,
  template: `
    <span class="brand-logo" [class]="'brand-logo brand-logo--' + size()">
      <img
        class="brand-logo__img"
        src="images/Logo.svg"
        alt="SubClub"
        loading="eager"
        decoding="async"
      />
      @if (showName()) {
        <span class="brand-logo__name">SubClub</span>
      }
    </span>
  `,
  styles: [
    `
      .brand-logo {
        display: inline-flex;
        align-items: center;
        gap: 10px;
      }

      .brand-logo__img {
        display: block;
        width: 36px;
        height: 36px;
        object-fit: contain;
        flex-shrink: 0;
      }

      .brand-logo__name {
        font-weight: 700;
        font-size: 1.2rem;
        letter-spacing: -0.02em;
        color: var(--text-primary);
      }

      .brand-logo--sm .brand-logo__img {
        width: 32px;
        height: 32px;
      }

      .brand-logo--sm .brand-logo__name {
        font-size: 1.12rem;
      }

      .brand-logo--lg .brand-logo__img {
        width: 44px;
        height: 44px;
      }

      .brand-logo--lg .brand-logo__name {
        font-size: 1.35rem;
      }
    `,
  ],
})
export class BrandLogoComponent {
  readonly size = input<'sm' | 'md' | 'lg'>('md');
  readonly showName = input<boolean>(true);
}
