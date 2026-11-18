import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';

export type ThemeMode = 'dark' | 'light';

const STORAGE_KEY = 'subclub-site-theme';

/**
 * Manages the active visual theme (dark/light) using Signals
 * and synchronizes body CSS classes and localStorage persistence.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);

  readonly theme = signal<ThemeMode>(this.readInitialTheme());
  readonly isDark = computed(() => this.theme() === 'dark');

  constructor() {
    effect(() => {
      const current = this.theme();
      const body = this.document?.body;
      if (body) {
        body.classList.remove('dark-theme', 'light-theme');
        body.classList.add(`${current}-theme`);
      }

      try {
        localStorage.setItem(STORAGE_KEY, current);
      } catch {
        // Ignore storage errors in restricted environments.
      }
    });
  }

  toggleTheme(): void {
    this.theme.update((current) => (current === 'dark' ? 'light' : 'dark'));
  }

  setTheme(mode: ThemeMode): void {
    this.theme.set(mode);
  }

  private readInitialTheme(): ThemeMode {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') {
        return stored;
      }
    } catch {
      // Ignore storage errors in restricted environments.
    }
    return 'dark';
  }
}
