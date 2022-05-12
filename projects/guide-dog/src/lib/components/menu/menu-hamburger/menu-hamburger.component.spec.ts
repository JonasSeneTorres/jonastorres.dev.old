import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHamburgerComponent } from './menu-hamburger.component';
import { ModalService } from 'projects/guide-dog/src/lib/services/modal/modal.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('MenuHamburgerComponent', () => {
  let component: MenuHamburgerComponent;
  let fixture: ComponentFixture<MenuHamburgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuHamburgerComponent ],
      imports: [ RouterTestingModule ],
      providers: [ModalService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuHamburgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
