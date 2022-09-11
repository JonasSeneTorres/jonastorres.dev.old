import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of, throwError } from 'rxjs';

import { AdminCrudComponent } from './admin-crud.component';

class TestingAdminCrudComponent extends AdminCrudComponent {
  erro = false;
  protected confirmarExclusao(registro: any): Observable<any> {
    if(this.erro) {
      return of({});
    }

    return throwError(() => new Error(''));
  }
}

describe('AdminCrudComponent', () => {
  let component: TestingAdminCrudComponent;
  let fixture: ComponentFixture<TestingAdminCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingAdminCrudComponent, AdminCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingAdminCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
