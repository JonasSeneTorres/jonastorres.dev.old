import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuModule } from '../../../menu.module';
import { ButtonHamburgerComponent } from './button-hamburger.component';

describe('ButtonHamburgerComponent', () => {
  let component: ButtonHamburgerComponent;
  let fixture: ComponentFixture<ButtonHamburgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonHamburgerComponent ],
      imports: [ MenuModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonHamburgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
