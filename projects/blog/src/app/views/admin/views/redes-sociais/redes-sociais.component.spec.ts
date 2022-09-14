import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModule } from './../../admin.module';
import { ArtigosService } from 'projects/blog/src/app/services/artigos/artigos.service';
import { HttpClientModule } from '@angular/common/http';
import { RedesSociaisComponent } from './redes-sociais.component';
import { SharedModule } from 'projects/blog/src/app/components/shared.module';

describe('RedesSociaisComponent', () => {
  let component: RedesSociaisComponent;
  let fixture: ComponentFixture<RedesSociaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesSociaisComponent ],
      imports: [SharedModule, HttpClientModule, AdminModule],
      providers: [ ArtigosService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedesSociaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
