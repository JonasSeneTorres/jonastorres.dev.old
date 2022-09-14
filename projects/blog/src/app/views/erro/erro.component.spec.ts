import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroComponent } from './erro.component';
import { SharedModule } from '../../components/shared.module';

describe('ErroComponent', () => {
  let component: ErroComponent;
  let fixture: ComponentFixture<ErroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErroComponent ],
      imports: [SharedModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('constructor', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
