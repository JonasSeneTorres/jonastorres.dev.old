import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModule } from '../../admin.module';
import { ArtigosService } from 'projects/blog/src/app/services/artigos/artigos.service';
import { HttpClientModule } from '@angular/common/http';
import { PerfilUsuarioComponent } from './perfil-usuario.component';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';

describe('PerfilUsuarioComponent', () => {
  let component: PerfilUsuarioComponent;
  let fixture: ComponentFixture<PerfilUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilUsuarioComponent ],
      imports: [SharedModule, HttpClientModule, AdminModule],
      providers: [ ArtigosService ]
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
