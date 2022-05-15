import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenteredPanelModule } from '../centered-panel/centered-panel.module';
import { FooterComponent } from './footer.component';
import { FooterModule } from './footer.module';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FooterModule,
        CenteredPanelModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
