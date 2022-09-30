import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoDispositivosComponent } from './grafico-dispositivos.component';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';

describe('GraficoDispositivosComponent', () => {
  let component: GraficoDispositivosComponent;
  let fixture: ComponentFixture<GraficoDispositivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficoDispositivosComponent],
      imports: [SharedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(GraficoDispositivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
