import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';
import { ActivatedRouteMock } from 'projects/blog/src/app/mocks/activated-route.mock';
import { ArtigosServiceMock } from 'projects/blog/src/app/mocks/artigos.service.mock';
import { ArtigosService } from 'projects/blog/src/app/services/artigos/artigos.service';

import { AdminModule } from './../../../admin.module';
import { AutorEdicaoComponent } from './autor-edicao.component';

describe('ADMIN/AutorEdicaoComponent', () => {
  let component: AutorEdicaoComponent;
  let fixture: ComponentFixture<AutorEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorEdicaoComponent ],
      imports: [SharedModule, AdminModule, HttpClientModule, RouterTestingModule],
      providers: [
        { provide: ArtigosService, useClass: ArtigosServiceMock },
        {provide: ActivatedRoute, useClass: ActivatedRouteMock
        },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutorEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
