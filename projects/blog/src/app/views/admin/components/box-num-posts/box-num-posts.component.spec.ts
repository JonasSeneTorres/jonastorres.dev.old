import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxNumPostsComponent } from './box-num-posts.component';

describe('BoxNumPostsComponent', () => {
  let component: BoxNumPostsComponent;
  let fixture: ComponentFixture<BoxNumPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxNumPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxNumPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
