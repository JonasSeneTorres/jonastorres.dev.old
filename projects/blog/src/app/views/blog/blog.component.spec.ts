import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { JumbotronModule } from '../../components/jumbotron/jumbotron.module';
import { SharedModule } from '../../components/shared.module';
import { ArtigosServiceMock } from '../../mocks/artigos.service.mock';
import { ArtigosService } from '../../services/artigos/artigos.service';
import { CategoriasService } from '../../services/categorias/categorias.service';
import { JumbotronService } from '../../services/jumbotron/jumbotron.service';
import { BlogComponent } from './blog.component';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogComponent],
      imports: [
        SharedModule,
        HttpClientModule,
        RouterTestingModule,
        JumbotronModule,
      ],
      providers: [
        { provide: ArtigosService, useClass: ArtigosServiceMock },
        CategoriasService,
        JumbotronService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
