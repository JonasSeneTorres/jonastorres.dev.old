import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';
import { ActivatedRouteMock } from 'projects/blog/src/app/mocks/activated-route.mock';
import { ArtigosServiceMock } from 'projects/blog/src/app/mocks/artigos.service.mock';
import { CategoriasServiceMock } from 'projects/blog/src/app/mocks/categorias.service.mock';
import { ArtigosService } from 'projects/blog/src/app/services/artigos/artigos.service';
import { BlogService } from 'projects/blog/src/app/services/blog/blog.service';
import { CategoriasService } from 'projects/blog/src/app/services/categorias/categorias.service';
import { JumbotronService } from 'projects/blog/src/app/services/jumbotron/jumbotron.service';

import { BlogModule } from '../../blog.module';
import { CategoriaComponent } from './categoria.component';

describe('CategoriaComponent', () => {
  let component: CategoriaComponent;
  let fixture: ComponentFixture<CategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriaComponent],
      imports: [
        SharedModule,
        RouterTestingModule,
        HttpClientModule,
        BlogModule,
      ],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteMock },
        { provide: ArtigosService, useClass: ArtigosServiceMock },
        { provide: CategoriasService, useClass: CategoriasServiceMock },
        BlogService,
        JumbotronService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create2', () => {
    expect(component).toBeTruthy();
  });
});
