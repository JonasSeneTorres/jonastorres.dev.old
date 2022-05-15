import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHamburgerComponent } from './menu-hamburger.component';
import { MenuModule } from './../menu.module';
import { ModalService } from 'projects/guide-dog/src/lib/services/modal/modal.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('MenuHamburgerComponent', () => {
  let component: MenuHamburgerComponent;
  let fixture: ComponentFixture<MenuHamburgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MenuModule,
        RouterTestingModule,
        NoopAnimationsModule
      ],
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
