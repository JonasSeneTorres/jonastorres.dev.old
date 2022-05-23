import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalMenuBurguerComponent } from './horizontal-menu-burguer.component';
import { MenuModule } from '../../../menu.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('HorizontalMenuBurguerComponent', () => {
  let component: HorizontalMenuBurguerComponent;
  let fixture: ComponentFixture<HorizontalMenuBurguerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MenuModule,
        RouterTestingModule,
        NoopAnimationsModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalMenuBurguerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
