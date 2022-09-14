import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigosService } from '../../services/artigos/artigos.service';
import { CategoriasService } from '../../services/categorias/categorias.service';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../../components/shared.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ HttpClientModule, SharedModule ],
      providers: [ ArtigosService, CategoriasService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('constructor', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
