import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxNumLikesComponent } from './box-num-likes.component';

describe('BoxNumLikesComponent', () => {
  let component: BoxNumLikesComponent;
  let fixture: ComponentFixture<BoxNumLikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxNumLikesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxNumLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
