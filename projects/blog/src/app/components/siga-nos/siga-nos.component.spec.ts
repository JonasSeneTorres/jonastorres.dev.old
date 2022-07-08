import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigaNosComponent } from './siga-nos.component';

describe('SigaNosComponent', () => {
  let component: SigaNosComponent;
  let fixture: ComponentFixture<SigaNosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigaNosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigaNosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
