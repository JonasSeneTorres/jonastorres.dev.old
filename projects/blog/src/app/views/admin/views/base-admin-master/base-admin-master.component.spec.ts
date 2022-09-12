import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of, throwError } from 'rxjs';

import { BaseAdminMasterComponent } from './base-admin-master.component';

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
      declarations: [ TestingBaseAdminMasterComponent, BaseAdminMasterComponent ]
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
