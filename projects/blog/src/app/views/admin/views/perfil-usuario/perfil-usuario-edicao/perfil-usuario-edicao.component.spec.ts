import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilUsuarioEdicaoComponent } from './perfil-usuario-edicao.component';

describe('PerfilUsuarioEdicaoComponent', () => {
  let component: PerfilUsuarioEdicaoComponent;
  let fixture: ComponentFixture<PerfilUsuarioEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilUsuarioEdicaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilUsuarioEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
