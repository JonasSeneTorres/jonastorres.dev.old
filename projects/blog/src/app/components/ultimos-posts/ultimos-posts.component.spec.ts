import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimosPostsComponent } from './ultimos-posts.component';

describe('UltimosPostsComponent', () => {
  let component: UltimosPostsComponent;
  let fixture: ComponentFixture<UltimosPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UltimosPostsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UltimosPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
