import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';
import { ArtigosServiceMock } from 'projects/blog/src/app/mocks/artigos.service.mock';
import { ArtigosService } from 'projects/blog/src/app/services/artigos/artigos.service';

import { BlogModule } from './../../blog.module';
import { GrupoComponent } from './grupo.component';

describe('GrupoComponent', () => {
  let component: GrupoComponent;
  let fixture: ComponentFixture<GrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoComponent ],
      imports: [SharedModule, RouterTestingModule, BlogModule],
      providers: [
        { provide: ArtigosService, useClass: ArtigosServiceMock},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
