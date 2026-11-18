import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  template: `
    <header class="section-header" [class.section-header--center]="align() === 'center'">
      @if (eyebrow()) {
        <span class="section-header__eyebrow">{{ eyebrow() }}</span>
      }
      <h2 class="section-header__title">{{ title() }}</h2>
      @if (subtitle()) {
        <p class="section-header__subtitle">{{ subtitle() }}</p>
      }
    </header>
  `,
  styles: [
    `
      .section-header {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-bottom: 48px;
        max-width: 680px;
      }

      .section-header--center {
        margin-inline: auto;
        text-align: center;
        align-items: center;
      }

      .section-header__eyebrow {
        display: inline-flex;
        align-items: center;
        padding: 4px 12px;
        border-radius: 999px;
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--color-primary);
        background: var(--bg-primary-tint);
        border: 1px solid var(--border-color);
      }

      .section-header__title {
        margin: 0;
        font-size: clamp(1.75rem, 3vw, 2.35rem);
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: -0.02em;
        color: var(--text-primary);
      }

      .section-header__subtitle {
        margin: 0;
        font-size: 1.05rem;
        line-height: 1.6;
        color: var(--text-secondary);
      }
    `,
  ],
})
export class SectionHeaderComponent {
  readonly eyebrow = input<string>('');
  readonly title = input.required<string>();
  readonly subtitle = input<string>('');
  readonly align = input<'left' | 'center'>('center');
}
