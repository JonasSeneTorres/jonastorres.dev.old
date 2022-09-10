import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoMobileSoComponent } from './grafico-mobile-so.component';

describe('GraficoSoMobileComponent', () => {
  let component: GraficoMobileSoComponent;
  let fixture: ComponentFixture<GraficoMobileSoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoMobileSoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoMobileSoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
