import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaEdicaoComponent } from './categoria-edicao.component';

describe('CategoriaEdicaoComponent', () => {
  let component: CategoriaEdicaoComponent;
  let fixture: ComponentFixture<CategoriaEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaEdicaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
