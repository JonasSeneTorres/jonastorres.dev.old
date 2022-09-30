import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';

import { AsideBoxComponent } from './aside-box.component';

describe('AsideBoxComponent', () => {
  let component: AsideBoxComponent;
  let fixture: ComponentFixture<AsideBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsideBoxComponent],
      imports: [SharedModule, HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AsideBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
