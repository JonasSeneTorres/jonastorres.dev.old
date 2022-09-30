import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { MenuModule } from '../../../menu.module';
import { HorizontalMenuBurguerComponent } from './horizontal-menu-burguer.component';

describe('HorizontalMenuBurguerComponent', () => {
  let component: HorizontalMenuBurguerComponent;
  let fixture: ComponentFixture<HorizontalMenuBurguerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuModule, RouterTestingModule, NoopAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalMenuBurguerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
