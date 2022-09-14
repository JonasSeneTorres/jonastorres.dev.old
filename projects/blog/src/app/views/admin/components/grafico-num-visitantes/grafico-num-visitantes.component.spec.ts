import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoNumVisitantesComponent } from './grafico-num-visitantes.component';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';

describe('GraficoNumVisitantesComponent', () => {
  let component: GraficoNumVisitantesComponent;
  let fixture: ComponentFixture<GraficoNumVisitantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoNumVisitantesComponent ],
      imports: [SharedModule]
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
