import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxNumPostsComponent } from './box-num-posts.component';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';

describe('BoxNumPostsComponent', () => {
  let component: BoxNumPostsComponent;
  let fixture: ComponentFixture<BoxNumPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoxNumPostsComponent],
      imports: [SharedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(BoxNumPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
