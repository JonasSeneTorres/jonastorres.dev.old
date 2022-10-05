import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';
import { ActivatedRouteMock } from 'projects/blog/src/app/mocks/activated-route.mock';
import { ArtigosServiceMock } from 'projects/blog/src/app/mocks/artigos.service.mock';
import { CategoriasServiceMock } from 'projects/blog/src/app/mocks/categorias.service.mock';
import { ArtigosService } from 'projects/blog/src/app/services/artigos/artigos.service';
import { CategoriasService } from 'projects/blog/src/app/services/categorias/categorias.service';

import { AdminModule } from '../../../admin.module';
import { CategoriaEdicaoComponent } from './categoria-edicao.component';

describe('ADMIN/CategoriaEdicaoComponent', () => {
  let component: CategoriaEdicaoComponent;
  let fixture: ComponentFixture<CategoriaEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriaEdicaoComponent],
      imports: [SharedModule, AdminModule, HttpClientModule, RouterTestingModule],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteMock },
        { provide: ArtigosService, useClass: ArtigosServiceMock },
        { provide: CategoriasService, useClass: CategoriasServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriaEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
