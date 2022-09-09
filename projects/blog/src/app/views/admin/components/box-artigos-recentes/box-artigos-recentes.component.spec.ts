import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxArtigosRecentesComponent } from './box-artigos-recentes.component';

describe('BoxArtigosRecentesComponent', () => {
  let component: BoxArtigosRecentesComponent;
  let fixture: ComponentFixture<BoxArtigosRecentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxArtigosRecentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxArtigosRecentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
