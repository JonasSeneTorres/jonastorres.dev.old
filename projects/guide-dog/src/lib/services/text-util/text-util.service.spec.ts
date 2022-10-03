import { TestBed } from '@angular/core/testing';

import { TextUtilService } from './text-util.service';

describe('TextUtilService', () => {
  let service: TextUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
