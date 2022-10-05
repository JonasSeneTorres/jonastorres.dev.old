import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';
import { ActivatedRouteMock } from 'projects/blog/src/app/mocks/activated-route.mock';
import { ArtigosServiceMock } from 'projects/blog/src/app/mocks/artigos.service.mock';
import { ArtigosService } from 'projects/blog/src/app/services/artigos/artigos.service';

import { BlogModule } from '../../blog.module';
import { AcessibilidadeComponent } from './acessibilidade.component';

describe('AcessibilidadeComponent', () => {
  let component: AcessibilidadeComponent;
  let fixture: ComponentFixture<AcessibilidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcessibilidadeComponent],
      imports: [SharedModule, RouterTestingModule, HttpClientModule, BlogModule],
      providers: [
        { provide: ArtigosService, useClass: ArtigosServiceMock },
        { provide: ActivatedRoute, useClass: ActivatedRouteMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AcessibilidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
