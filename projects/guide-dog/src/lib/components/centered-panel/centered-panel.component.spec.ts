import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuModule } from '../menu/menu.module';
import { CenteredPanelComponent } from './centered-panel.component';
import { CenteredPanelModule } from './centered-panel.module';

describe('CenteredPanelComponent', () => {
  let component: CenteredPanelComponent;
  let fixture: ComponentFixture<CenteredPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CenteredPanelModule, MenuModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenteredPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
