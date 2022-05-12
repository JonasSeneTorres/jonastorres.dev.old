import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessibilityBarComponent } from './acessibility-bar.component';

describe('AcessibilityBarComponent', () => {
  let component: AcessibilityBarComponent;
  let fixture: ComponentFixture<AcessibilityBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcessibilityBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessibilityBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
