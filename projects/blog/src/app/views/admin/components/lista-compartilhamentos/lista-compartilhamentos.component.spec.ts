import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCompartilhamentosComponent } from './lista-compartilhamentos.component';

describe('ListaCompartilhamentosComponent', () => {
  let component: ListaCompartilhamentosComponent;
  let fixture: ComponentFixture<ListaCompartilhamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCompartilhamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCompartilhamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
