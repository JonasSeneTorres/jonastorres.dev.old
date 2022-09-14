import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModule } from '../../../admin.module';
import { ArtigoEdicaoComponent } from './artigo-edicao.component';
import { ArtigosService } from 'projects/blog/src/app/services/artigos/artigos.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';

describe('ArtigoEdicaoComponent', () => {
  let component: ArtigoEdicaoComponent;
  let fixture: ComponentFixture<ArtigoEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtigoEdicaoComponent ],
      imports: [SharedModule, AdminModule, HttpClientModule],
      providers: [ ArtigosService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtigoEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
