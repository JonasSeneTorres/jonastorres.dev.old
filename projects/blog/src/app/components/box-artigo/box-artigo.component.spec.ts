import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxArtigoComponent } from './box-artigo.component';

describe('BoxArtigoComponent', () => {
  let component: BoxArtigoComponent;
  let fixture: ComponentFixture<BoxArtigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxArtigoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxArtigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
