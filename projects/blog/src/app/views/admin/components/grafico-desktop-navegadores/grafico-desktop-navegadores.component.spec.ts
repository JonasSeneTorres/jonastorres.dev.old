import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoDesktopNavegadoresComponent } from './grafico-desktop-navegadores.component';

describe('GraficoDesktopNavegadoresComponent', () => {
  let component: GraficoDesktopNavegadoresComponent;
  let fixture: ComponentFixture<GraficoDesktopNavegadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoDesktopNavegadoresComponent ]
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
