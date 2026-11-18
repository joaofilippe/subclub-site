import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  beforeEach(() => {
    localStorage.removeItem('subclub-site-theme');
    document.body.classList.remove('dark-theme', 'light-theme');
    TestBed.configureTestingModule({});
  });

  it('should default to dark theme when no preference is stored', () => {
    const service = TestBed.inject(ThemeService);
    TestBed.flushEffects();

    expect(service.theme()).toBe('dark');
    expect(service.isDark()).toBeTrue();
    expect(document.body.classList.contains('dark-theme')).toBeTrue();
  });

  it('should toggle between dark and light themes and persist preference', () => {
    const service = TestBed.inject(ThemeService);
    TestBed.flushEffects();

    service.toggleTheme();
    TestBed.flushEffects();

    expect(service.theme()).toBe('light');
    expect(service.isDark()).toBeFalse();
    expect(document.body.classList.contains('light-theme')).toBeTrue();
    expect(localStorage.getItem('subclub-site-theme')).toBe('light');
  });
});
