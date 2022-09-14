import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModule } from './../../admin.module';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';
import { UsuariosComponent } from './usuarios.component';

describe('UsuariosComponent', () => {
  let component: UsuariosComponent;
  let fixture: ComponentFixture<UsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosComponent ],
      imports: [SharedModule, AdminModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
