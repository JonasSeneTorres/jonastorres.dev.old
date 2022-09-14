import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModule } from '../../admin.module';
import { ArtigoComponent } from './artigo.component';
import { ArtigosService } from 'projects/blog/src/app/services/artigos/artigos.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';

describe('ArtigoComponent', () => {
  let component: ArtigoComponent;
  let fixture: ComponentFixture<ArtigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtigoComponent ],
      imports: [SharedModule, AdminModule, HttpClientModule],
      providers: [ ArtigosService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
