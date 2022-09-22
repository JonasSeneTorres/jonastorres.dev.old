import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';
import { ArtigosServiceMock } from 'projects/blog/src/app/mocks/artigos.service.mock';
import { ArtigosService } from 'projects/blog/src/app/services/artigos/artigos.service';

import { AdminModule } from '../../../admin.module';
import { UsuariosEdicaoComponent } from './usuarios-edicao.component';

describe('ADMIN/UsuariosEdicaoComponent', () => {
  let component: UsuariosEdicaoComponent;
  let fixture: ComponentFixture<UsuariosEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosEdicaoComponent ],
      imports: [SharedModule, AdminModule, HttpClientModule],
      providers: [{ provide: ArtigosService, useClass: ArtigosServiceMock }],
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
