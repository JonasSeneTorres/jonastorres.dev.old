import { AutoresService } from './autores.service';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

describe('AutoresService', () => {
  let service: AutoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AutoresService],
    });
    service = TestBed.inject(AutoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
