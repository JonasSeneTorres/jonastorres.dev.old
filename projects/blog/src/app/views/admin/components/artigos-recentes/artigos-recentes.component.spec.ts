import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigosRecentesComponent } from './artigos-recentes.component';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';

describe('BoxArtigosRecentesComponent', () => {
  let component: ArtigosRecentesComponent;
  let fixture: ComponentFixture<ArtigosRecentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtigosRecentesComponent ],
      imports: [SharedModule]
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
