import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalService } from 'projects/guide-dog/src/lib/services/modal/modal.service';

import { MenuModule } from './../menu.module';
import { MenuHamburgerComponent } from './menu-hamburger.component';

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
