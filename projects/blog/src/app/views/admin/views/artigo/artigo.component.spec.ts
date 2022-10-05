import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';
import { ActivatedRouteMock } from 'projects/blog/src/app/mocks/activated-route.mock';
import { ArtigosServiceMock } from 'projects/blog/src/app/mocks/artigos.service.mock';
import { AutoresServiceMock } from 'projects/blog/src/app/mocks/autores.service.mock';
import { ArtigosService } from 'projects/blog/src/app/services/artigos/artigos.service';
import { AutoresService } from 'projects/blog/src/app/services/autores/autores.service';

import { AdminModule } from '../../admin.module';
import { ArtigoComponent } from './artigo.component';

describe('ADMIN/ArtigoComponent', () => {
  let component: ArtigoComponent;
  let fixture: ComponentFixture<ArtigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtigoComponent],
      imports: [SharedModule, AdminModule, RouterTestingModule, HttpClientModule],
      providers: [
        { provide: ArtigosService, useClass: ArtigosServiceMock },
        { provide: AutoresService, useClass: AutoresServiceMock },
        { provide: ActivatedRoute, useClass: ActivatedRouteMock },
        ConfirmationService,
        MessageService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
