import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListHorizontalComponent } from './menu-list-horizontal.component';

describe('MenuListHorizontalComponent', () => {
  let component: MenuListHorizontalComponent;
  let fixture: ComponentFixture<MenuListHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuListHorizontalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuListHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
