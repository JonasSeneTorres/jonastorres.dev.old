import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModule } from '../../admin.module';
import { ArtigosService } from 'projects/blog/src/app/services/artigos/artigos.service';
import { AutorComponent } from './autor.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';

describe('AutorComponent', () => {
  let component: AutorComponent;
  let fixture: ComponentFixture<AutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorComponent ],
      imports: [SharedModule, AdminModule, HttpClientModule],
      providers: [ ArtigosService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
