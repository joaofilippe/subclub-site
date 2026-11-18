import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionHeaderComponent } from './section-header.component';

describe('SectionHeaderComponent', () => {
  let fixture: ComponentFixture<SectionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionHeaderComponent);
    fixture.componentRef.setInput('title', 'Recursos do SubClub');
    fixture.componentRef.setInput('eyebrow', 'Plataforma');
    fixture.componentRef.setInput('subtitle', 'Tudo para operar seu clube.');
    fixture.detectChanges();
  });

  it('should render eyebrow, title and subtitle', () => {
    const el: HTMLElement = fixture.nativeElement;

    expect(el.querySelector('.section-header__eyebrow')?.textContent?.trim()).toBe('Plataforma');
    expect(el.querySelector('.section-header__title')?.textContent?.trim()).toBe('Recursos do SubClub');
    expect(el.querySelector('.section-header__subtitle')?.textContent?.trim()).toBe('Tudo para operar seu clube.');
  });
});
