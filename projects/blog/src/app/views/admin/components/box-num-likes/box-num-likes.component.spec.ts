import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxNumLikesComponent } from './box-num-likes.component';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';

describe('BoxNumLikesComponent', () => {
  let component: BoxNumLikesComponent;
  let fixture: ComponentFixture<BoxNumLikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxNumLikesComponent ],
      imports: [SharedModule]
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
