import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';
import { ArtigosServiceMock } from 'projects/blog/src/app/mocks/artigos.service.mock';
import { ArtigosService } from 'projects/blog/src/app/services/artigos/artigos.service';

import { AdminModule } from '../../../admin.module';
import { PerfilUsuarioEdicaoComponent } from './perfil-usuario-edicao.component';

describe('ADMIN/PerfilUsuarioEdicaoComponent', () => {
  let component: PerfilUsuarioEdicaoComponent;
  let fixture: ComponentFixture<PerfilUsuarioEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilUsuarioEdicaoComponent ],
      imports: [SharedModule, AdminModule, HttpClientModule],
      providers: [{ provide: ArtigosService, useClass: ArtigosServiceMock }],
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
