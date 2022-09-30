import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalClassificacaoComponent } from './modal-classificacao.component';

describe('ModalClassificacaoComponent', () => {
  let component: ModalClassificacaoComponent;
  let fixture: ComponentFixture<ModalClassificacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalClassificacaoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalClassificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
