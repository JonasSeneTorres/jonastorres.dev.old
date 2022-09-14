import { ArtigosService } from './artigos.service';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

describe('ArtigosService', () => {
  let service: ArtigosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [
        ArtigosService
      ]
    });
    service = TestBed.inject(ArtigosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
