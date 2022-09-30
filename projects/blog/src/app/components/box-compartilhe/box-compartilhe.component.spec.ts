import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxCompartilheComponent } from './box-compartilhe.component';

describe('BoxCompartilheComponent', () => {
  let component: BoxCompartilheComponent;
  let fixture: ComponentFixture<BoxCompartilheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoxCompartilheComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BoxCompartilheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
