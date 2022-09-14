import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Observable, of, throwError } from 'rxjs';

import { AdminModule } from './../../admin.module';
import { BaseAdminMasterComponent } from './base-admin-master.component';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';

class TestingBaseAdminMasterComponent extends BaseAdminMasterComponent {
  erro = false;

  protected listarItens(): void {
    return;
  }

  protected confirmarExclusao(_registro: any): Observable<any> {
    if(this.erro) {
      return of({});
    }

    return throwError(() => new Error(''));
  }
}

describe('BaseAdminMasterComponent', () => {
  let component: TestingBaseAdminMasterComponent;
  let fixture: ComponentFixture<TestingBaseAdminMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingBaseAdminMasterComponent, BaseAdminMasterComponent ],
      imports: [SharedModule, AdminModule],
      providers: [ConfirmationService, MessageService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingBaseAdminMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
