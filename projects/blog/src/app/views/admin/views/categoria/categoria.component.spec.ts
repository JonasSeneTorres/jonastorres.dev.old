import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';
import { ActivatedRouteMock } from 'projects/blog/src/app/mocks/activated-route.mock';
import { CategoriasServiceMock } from 'projects/blog/src/app/mocks/categorias.service.mock';
import { CategoriasService } from 'projects/blog/src/app/services/categorias/categorias.service';

import { AdminModule } from './../../admin.module';
import { CategoriaComponent } from './categoria.component';

describe('ADMIN/CategoriaComponent', () => {
  let component: CategoriaComponent;
  let fixture: ComponentFixture<CategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriaComponent],
      imports: [SharedModule, RouterTestingModule, HttpClientModule, AdminModule, TableModule],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteMock },
        { provide: CategoriasService, useClass: CategoriasServiceMock },
        ConfirmationService,
        MessageService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
