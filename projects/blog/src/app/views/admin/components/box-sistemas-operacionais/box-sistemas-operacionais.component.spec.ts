import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxSistemasOperacionaisComponent } from './box-sistemas-operacionais.component';

describe('BoxSistemasOperacionaisComponent', () => {
  let component: BoxSistemasOperacionaisComponent;
  let fixture: ComponentFixture<BoxSistemasOperacionaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxSistemasOperacionaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxSistemasOperacionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
