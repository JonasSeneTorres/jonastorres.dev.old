import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosRecentesComponent } from './comentarios-recentes.component';

describe('BoxComentariosRecentesComponent', () => {
  let component: ComentariosRecentesComponent;
  let fixture: ComponentFixture<ComentariosRecentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentariosRecentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentariosRecentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
