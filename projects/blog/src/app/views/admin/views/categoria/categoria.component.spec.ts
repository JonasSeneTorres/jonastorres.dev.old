import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModule } from './../../admin.module';
import { ArtigosService } from 'projects/blog/src/app/services/artigos/artigos.service';
import { CategoriaComponent } from './categoria.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';

describe('CategoriaComponent', () => {
  let component: CategoriaComponent;
  let fixture: ComponentFixture<CategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaComponent ],
      imports: [SharedModule, HttpClientModule, AdminModule],
      providers: [ ArtigosService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
