import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
  });

  it('should display SubClub brand and footer columns', () => {
    const el: HTMLElement = fixture.nativeElement;

    expect(el.querySelector('.footer__brand-name')?.textContent?.trim()).toBe('SubClub');
    expect(el.querySelectorAll('.footer__column').length).toBe(2);
  });
});
