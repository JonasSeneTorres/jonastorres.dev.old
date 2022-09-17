import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesSociaisEdicaoComponent } from './redes-sociais-edicao.component';

describe('RedesSociaisEdicaoComponent', () => {
  let component: RedesSociaisEdicaoComponent;
  let fixture: ComponentFixture<RedesSociaisEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesSociaisEdicaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedesSociaisEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
