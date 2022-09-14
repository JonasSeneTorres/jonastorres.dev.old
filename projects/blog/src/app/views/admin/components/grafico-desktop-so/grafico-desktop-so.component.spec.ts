import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoDesktopSOComponent } from './grafico-desktop-so.component';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';

describe('BoxSistemasOperacionaisComponent', () => {
  let component: GraficoDesktopSOComponent;
  let fixture: ComponentFixture<GraficoDesktopSOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoDesktopSOComponent ],
      imports: [SharedModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoDesktopSOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
