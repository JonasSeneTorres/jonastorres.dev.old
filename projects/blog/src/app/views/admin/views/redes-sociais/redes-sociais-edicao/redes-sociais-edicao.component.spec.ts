import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';
import { ArtigosServiceMock } from 'projects/blog/src/app/mocks/artigos.service.mock';
import { ArtigosService } from 'projects/blog/src/app/services/artigos/artigos.service';

import { AdminModule } from './../../../admin.module';
import { RedesSociaisEdicaoComponent } from './redes-sociais-edicao.component';

describe('RedesSociaisEdicaoComponent', () => {
  let component: RedesSociaisEdicaoComponent;
  let fixture: ComponentFixture<RedesSociaisEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesSociaisEdicaoComponent ],
      imports: [SharedModule, AdminModule, HttpClientModule],
      providers: [{ provide: ArtigosService, useClass: ArtigosServiceMock }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedesSociaisEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
