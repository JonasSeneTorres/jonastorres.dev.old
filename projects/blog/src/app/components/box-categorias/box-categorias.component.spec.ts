import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxCategoriasComponent } from './box-categorias.component';

describe('BoxCategoriasComponent', () => {
  let component: BoxCategoriasComponent;
  let fixture: ComponentFixture<BoxCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
