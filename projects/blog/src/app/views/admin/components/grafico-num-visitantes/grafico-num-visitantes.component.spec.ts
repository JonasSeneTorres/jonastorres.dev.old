import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoNumVisitantesComponent } from './grafico-num-visitantes.component';

describe('GraficoNumVisitantesComponent', () => {
  let component: GraficoNumVisitantesComponent;
  let fixture: ComponentFixture<GraficoNumVisitantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoNumVisitantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoNumVisitantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
