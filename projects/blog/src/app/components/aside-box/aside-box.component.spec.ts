import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideBoxComponent } from './aside-box.component';

describe('AsideBoxComponent', () => {
  let component: AsideBoxComponent;
  let fixture: ComponentFixture<AsideBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
