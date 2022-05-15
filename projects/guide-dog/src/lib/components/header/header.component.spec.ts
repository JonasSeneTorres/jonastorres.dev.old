import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenteredPanelModule } from '../centered-panel/centered-panel.module';
import { HeaderComponent } from './header.component';
import { HeaderModule } from './header.module';
import { MenuModule } from './../menu/menu.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HeaderModule,
        CenteredPanelModule,
        MenuModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
