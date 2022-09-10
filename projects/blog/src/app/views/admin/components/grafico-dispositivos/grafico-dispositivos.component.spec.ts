import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoDispositivosComponent } from './grafico-dispositivos.component';

describe('GraficoDispositivosComponent', () => {
  let component: GraficoDispositivosComponent;
  let fixture: ComponentFixture<GraficoDispositivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoDispositivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoDispositivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
