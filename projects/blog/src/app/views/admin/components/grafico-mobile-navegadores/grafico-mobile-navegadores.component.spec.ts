import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoMobileNavegadoresComponent } from './grafico-mobile-navegadores.component';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';

describe('GraficoMobileNavegadoresComponent', () => {
  let component: GraficoMobileNavegadoresComponent;
  let fixture: ComponentFixture<GraficoMobileNavegadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoMobileNavegadoresComponent ],
      imports: [SharedModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoMobileNavegadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
