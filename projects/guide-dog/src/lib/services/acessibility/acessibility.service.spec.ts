import { TestBed } from '@angular/core/testing';

import { AcessibilityService } from './acessibility.service';

describe('AcessibilityService', () => {
  let service: AcessibilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcessibilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
