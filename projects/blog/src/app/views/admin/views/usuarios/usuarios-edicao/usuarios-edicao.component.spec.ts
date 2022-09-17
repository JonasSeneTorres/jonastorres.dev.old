import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosEdicaoComponent } from './usuarios-edicao.component';

describe('UsuariosEdicaoComponent', () => {
  let component: UsuariosEdicaoComponent;
  let fixture: ComponentFixture<UsuariosEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosEdicaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
