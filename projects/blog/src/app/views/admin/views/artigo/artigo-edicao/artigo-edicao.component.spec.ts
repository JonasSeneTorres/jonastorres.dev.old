import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';
import { ArtigosServiceMock } from 'projects/blog/src/app/mocks/artigos.service.mock';
import { ArtigosService } from 'projects/blog/src/app/services/artigos/artigos.service';

import { AdminModule } from '../../../admin.module';
import { ArtigoEdicaoComponent } from './artigo-edicao.component';

describe('ADMIN/ArtigoEdicaoComponent', () => {
  let component: ArtigoEdicaoComponent;
  let fixture: ComponentFixture<ArtigoEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtigoEdicaoComponent],
      imports: [SharedModule, AdminModule, HttpClientModule, RouterTestingModule],
      providers: [{ provide: ArtigosService, useClass: ArtigosServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtigoEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
