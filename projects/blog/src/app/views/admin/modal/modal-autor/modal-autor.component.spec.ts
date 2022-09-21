import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';
import { ActivatedRouteMock } from 'projects/blog/src/app/mocks/activated-route.mock';

import { ModalAutorComponent } from './modal-autor.component';

describe('ModalAutorComponent', () => {
  let component: ModalAutorComponent;
  let fixture: ComponentFixture<ModalAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAutorComponent ],
      imports: [ SharedModule ],
      providers: [
        {provide: ActivatedRoute, useClass: ActivatedRouteMock},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
