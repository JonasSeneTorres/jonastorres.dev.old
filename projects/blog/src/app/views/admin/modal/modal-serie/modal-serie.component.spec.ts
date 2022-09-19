import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSerieComponent } from './modal-serie.component';

describe('ModalSerieComponent', () => {
  let component: ModalSerieComponent;
  let fixture: ComponentFixture<ModalSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSerieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
