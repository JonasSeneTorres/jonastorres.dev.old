import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosRecentesComponent } from './comentarios-recentes.component';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';

describe('BoxComentariosRecentesComponent', () => {
  let component: ComentariosRecentesComponent;
  let fixture: ComponentFixture<ComentariosRecentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComentariosRecentesComponent],
      imports: [SharedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ComentariosRecentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
