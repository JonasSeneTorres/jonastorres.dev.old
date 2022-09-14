import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxNumSeguidoresComponent } from './box-num-seguidores.component';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';

describe('BoxNumSeguidoresComponent', () => {
  let component: BoxNumSeguidoresComponent;
  let fixture: ComponentFixture<BoxNumSeguidoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxNumSeguidoresComponent ],
      imports: [SharedModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxNumSeguidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
