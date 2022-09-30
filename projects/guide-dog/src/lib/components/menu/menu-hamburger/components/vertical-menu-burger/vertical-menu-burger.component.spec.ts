import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuModule } from '../../../menu.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { VerticalMenuBurgerComponent } from './vertical-menu-burger.component';

describe('VerticalMenuBurgerComponent', () => {
  let component: VerticalMenuBurgerComponent;
  let fixture: ComponentFixture<VerticalMenuBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuModule, RouterTestingModule, NoopAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalMenuBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
