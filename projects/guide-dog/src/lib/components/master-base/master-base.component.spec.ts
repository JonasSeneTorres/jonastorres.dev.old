import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterBaseComponent } from './master-base.component';

describe('MasterBaseComponent', () => {
  let component: MasterBaseComponent;
  let fixture: ComponentFixture<MasterBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MasterBaseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MasterBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
