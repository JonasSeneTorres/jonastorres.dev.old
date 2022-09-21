import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';

import { ArtigosRecentesComponent } from './artigos-recentes.component';

describe('BoxArtigosRecentesComponent', () => {
  let component: ArtigosRecentesComponent;
  let fixture: ComponentFixture<ArtigosRecentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtigosRecentesComponent ],
      providers: [],
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
