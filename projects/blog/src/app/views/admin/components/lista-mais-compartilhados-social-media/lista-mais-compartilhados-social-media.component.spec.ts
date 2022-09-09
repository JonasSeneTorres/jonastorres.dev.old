import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMaisCompartilhadosSocialMediaComponent } from './lista-mais-compartilhados-social-media.component';

describe('ListaMaisCompartilhadosSocialMediaComponent', () => {
  let component: ListaMaisCompartilhadosSocialMediaComponent;
  let fixture: ComponentFixture<ListaMaisCompartilhadosSocialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMaisCompartilhadosSocialMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaMaisCompartilhadosSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
