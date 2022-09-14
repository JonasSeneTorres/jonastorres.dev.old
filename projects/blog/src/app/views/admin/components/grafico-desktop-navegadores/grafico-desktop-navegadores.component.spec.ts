import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoDesktopNavegadoresComponent } from './grafico-desktop-navegadores.component';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';

describe('GraficoDesktopNavegadoresComponent', () => {
  let component: GraficoDesktopNavegadoresComponent;
  let fixture: ComponentFixture<GraficoDesktopNavegadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoDesktopNavegadoresComponent ],
      imports: [SharedModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoDesktopNavegadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
