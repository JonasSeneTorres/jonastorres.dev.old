import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCompartilhamentosComponent } from './lista-compartilhamentos.component';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';

describe('ListaCompartilhamentosComponent', () => {
  let component: ListaCompartilhamentosComponent;
  let fixture: ComponentFixture<ListaCompartilhamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaCompartilhamentosComponent],
      imports: [SharedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaCompartilhamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
