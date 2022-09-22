import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ActivatedRouteMock } from '../../../mocks/activated-route.mock';
import { MenuModule } from '../menu.module';
import { AcessibilityBarComponent } from './acessibility-bar.component';

describe('AcessibilityBarComponent', () => {
  let component: AcessibilityBarComponent;
  let fixture: ComponentFixture<AcessibilityBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcessibilityBarComponent],
      imports: [MenuModule, RouterTestingModule],
      providers: [{ provide: ActivatedRoute, useClass: ActivatedRouteMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessibilityBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
