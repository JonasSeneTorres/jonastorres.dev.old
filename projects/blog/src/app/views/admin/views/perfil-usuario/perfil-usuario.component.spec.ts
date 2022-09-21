import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';
import { ActivatedRouteMock } from 'projects/blog/src/app/mocks/activated-route.mock';
import { ArtigosServiceMock } from 'projects/blog/src/app/mocks/artigos.service.mock';
import { ArtigosService } from 'projects/blog/src/app/services/artigos/artigos.service';

import { AdminModule } from '../../admin.module';
import { PerfilUsuarioComponent } from './perfil-usuario.component';

describe('PerfilUsuarioComponent', () => {
  let component: PerfilUsuarioComponent;
  let fixture: ComponentFixture<PerfilUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilUsuarioComponent ],
      imports: [SharedModule, RouterTestingModule, HttpClientModule, AdminModule],
      providers: [
        { provide: ArtigosService, useClass: ArtigosServiceMock },
        {provide: ActivatedRoute, useClass: ActivatedRouteMock},
        ConfirmationService,
        MessageService
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
