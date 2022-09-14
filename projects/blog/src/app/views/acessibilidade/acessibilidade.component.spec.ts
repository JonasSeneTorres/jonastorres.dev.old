import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessibilidadeComponent } from './acessibilidade.component';
import { SharedModule } from '../../components/shared.module';

describe('AcessibilidadeComponent', () => {
  let component: AcessibilidadeComponent;
  let fixture: ComponentFixture<AcessibilidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcessibilidadeComponent ],
      imports: [SharedModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessibilidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('constructor', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
