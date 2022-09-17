import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorEdicaoComponent } from './autor-edicao.component';

describe('AutorEdicaoComponent', () => {
  let component: AutorEdicaoComponent;
  let fixture: ComponentFixture<AutorEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorEdicaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutorEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
