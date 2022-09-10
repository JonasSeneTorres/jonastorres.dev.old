import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigosRecentesComponent } from './artigos-recentes.component';

describe('BoxArtigosRecentesComponent', () => {
  let component: ArtigosRecentesComponent;
  let fixture: ComponentFixture<ArtigosRecentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtigosRecentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtigosRecentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
