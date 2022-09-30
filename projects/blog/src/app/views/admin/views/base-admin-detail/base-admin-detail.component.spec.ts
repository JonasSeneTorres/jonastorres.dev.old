import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Observable } from 'rxjs';

import { BaseAdminDetailComponent } from './base-admin-detail.component';

class TestingBaseAdminDetailComponent extends BaseAdminDetailComponent {
  erro = false;

  submit(): void {
    throw new Error('Method not implemented.');
  }

  protected gravarDadosInclusao(dados: any): Observable<any> {
    throw new Error('Method not implemented.');
  }

  protected gravarDadosEdicao(dados: any): Observable<any> {
    throw new Error('Method not implemented.');
  }

  protected criarForm(): void {
    throw new Error('Method not implemented.');
  }

  protected prepararFormEdicao(): void {
    throw new Error('Method not implemented.');
  }
}

describe('BaseAdminDetailComponent', () => {
  let component: TestingBaseAdminDetailComponent;
  let fixture: ComponentFixture<TestingBaseAdminDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestingBaseAdminDetailComponent],
      imports: [RouterTestingModule],
      providers: [ConfirmationService, MessageService],
    }).compileComponents();

    fixture = TestBed.createComponent(TestingBaseAdminDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
