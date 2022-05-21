import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalMenuBurguerComponent } from './horizontal-menu-burguer.component';

describe('HorizontalMenuBurguerComponent', () => {
  let component: HorizontalMenuBurguerComponent;
  let fixture: ComponentFixture<HorizontalMenuBurguerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalMenuBurguerComponent ]
    })
    .compileComponents();
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
