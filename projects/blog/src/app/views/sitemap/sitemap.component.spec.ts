import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { SharedModule } from '../../components/shared.module';
import { ActivatedRouteMock } from '../../mocks/activated-route.mock';
import { SitemapComponent } from './sitemap.component';

describe('SitemapComponent', () => {
  let component: SitemapComponent;
  let fixture: ComponentFixture<SitemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SitemapComponent],
      providers: [{ provide: ActivatedRoute, useClass: ActivatedRouteMock }],
      imports: [SharedModule, HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SitemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
