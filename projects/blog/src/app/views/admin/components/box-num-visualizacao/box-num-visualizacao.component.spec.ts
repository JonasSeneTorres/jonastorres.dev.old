import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxNumVisualizacaoComponent } from './box-num-visualizacao.component';

describe('BoxNumVisualizacaoComponent', () => {
  let component: BoxNumVisualizacaoComponent;
  let fixture: ComponentFixture<BoxNumVisualizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxNumVisualizacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxNumVisualizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
