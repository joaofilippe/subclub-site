import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { ThemeService } from '../../core/theme/theme.service';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let fixture: ComponentFixture<NavbarComponent>;
  let component: NavbarComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render brand logo and navigation links', () => {
    const el: HTMLElement = fixture.nativeElement;

    expect(el.querySelector('app-brand-logo')).not.toBeNull();
    expect(el.querySelector('.brand-logo__name')?.textContent?.trim()).toBe('SubClub');
    expect(el.querySelectorAll('.navbar__link').length).toBe(4);
  });

  it('should toggle mobile menu state', () => {
    expect(component.mobileMenuOpen()).toBeFalse();

    component.toggleMobileMenu();
    fixture.detectChanges();
    expect(component.mobileMenuOpen()).toBeTrue();
    expect(fixture.nativeElement.querySelector('.navbar__mobile-drawer')).not.toBeNull();

    component.closeMobileMenu();
    fixture.detectChanges();
    expect(component.mobileMenuOpen()).toBeFalse();
  });

  it('should toggle theme through ThemeService', () => {
    const themeService = TestBed.inject(ThemeService);
    const initialTheme = themeService.theme();

    const themeBtn = fixture.nativeElement.querySelector(
      '.navbar__actions button[mat-icon-button]',
    ) as HTMLButtonElement;
    themeBtn.click();

    expect(themeService.theme()).not.toBe(initialTheme);
  });
});
