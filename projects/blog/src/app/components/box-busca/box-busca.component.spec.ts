import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxBuscaComponent } from './box-busca.component';

describe('BoxBuscaComponent', () => {
  let component: BoxBuscaComponent;
  let fixture: ComponentFixture<BoxBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxBuscaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
