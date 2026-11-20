import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrandLogoComponent } from './brand-logo.component';

describe('BrandLogoComponent', () => {
  let fixture: ComponentFixture<BrandLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandLogoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrandLogoComponent);
    fixture.detectChanges();
  });

  it('should render the brand logo image and BeanByte name by default', () => {
    const el: HTMLElement = fixture.nativeElement;
    const img = el.querySelector('.brand-logo__img') as HTMLImageElement;

    expect(img).not.toBeNull();
    expect(img.getAttribute('src')).toBe('images/logo.svg');
    expect(el.querySelector('.brand-logo__name')?.textContent?.trim()).toBe('BeanByte');
  });

  it('should hide the brand name when showName is false', () => {
    fixture.componentRef.setInput('showName', false);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.brand-logo__name')).toBeNull();
  });
});
