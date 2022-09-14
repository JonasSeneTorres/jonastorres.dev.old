import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigosService } from '../../services/artigos/artigos.service';
import { ArtigosServiceMock } from '../../mocks/artigo.service.mock';
import { BlogComponent } from './blog.component';
import { CategoriasService } from '../../services/categorias/categorias.service';
import { HttpClientModule } from '@angular/common/http';
import { JumbotronService } from '../../services/jumbotron/jumbotron.service';
import { SharedModule } from '../../components/shared.module';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogComponent ],
      imports: [ SharedModule, HttpClientModule ],
      providers: [
        { provide: ArtigosService, useClass: ArtigosServiceMock},
        // ArtigosService,
        CategoriasService,
        JumbotronService,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
