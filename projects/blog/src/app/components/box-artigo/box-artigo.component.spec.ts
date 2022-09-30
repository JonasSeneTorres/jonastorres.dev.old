import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';

import { BoxArtigoComponent } from './box-artigo.component';

describe('BoxArtigoComponent', () => {
  let component: BoxArtigoComponent;
  let fixture: ComponentFixture<BoxArtigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoxArtigoComponent],
      imports: [SharedModule, HttpClientModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(BoxArtigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
