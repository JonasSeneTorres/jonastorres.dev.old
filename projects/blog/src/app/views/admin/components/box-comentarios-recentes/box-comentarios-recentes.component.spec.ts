import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxComentariosRecentesComponent } from './box-comentarios-recentes.component';

describe('BoxComentariosRecentesComponent', () => {
  let component: BoxComentariosRecentesComponent;
  let fixture: ComponentFixture<BoxComentariosRecentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxComentariosRecentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxComentariosRecentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
