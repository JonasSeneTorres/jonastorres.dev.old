import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalMenuBurgerComponent } from './vertical-menu-burger.component';

describe('VerticalMenuBurgerComponent', () => {
  let component: VerticalMenuBurgerComponent;
  let fixture: ComponentFixture<VerticalMenuBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalMenuBurgerComponent ]
    })
    .compileComponents();
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
