import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoMobileSoComponent } from './grafico-mobile-so.component';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';

describe('GraficoSoMobileComponent', () => {
  let component: GraficoMobileSoComponent;
  let fixture: ComponentFixture<GraficoMobileSoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoMobileSoComponent ],
      imports: [SharedModule]
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
