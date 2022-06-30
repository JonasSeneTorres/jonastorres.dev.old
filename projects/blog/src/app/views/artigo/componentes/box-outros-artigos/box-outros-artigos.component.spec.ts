import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxOutrosArtigosComponent } from './box-outros-artigos.component';

describe('BoxOutrosArtigosComponent', () => {
  let component: BoxOutrosArtigosComponent;
  let fixture: ComponentFixture<BoxOutrosArtigosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxOutrosArtigosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxOutrosArtigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
