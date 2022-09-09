import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxNumSeguidoresComponent } from './box-num-seguidores.component';

describe('BoxNumSeguidoresComponent', () => {
  let component: BoxNumSeguidoresComponent;
  let fixture: ComponentFixture<BoxNumSeguidoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxNumSeguidoresComponent ]
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
