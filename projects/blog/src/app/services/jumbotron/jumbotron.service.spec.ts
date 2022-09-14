import { TestBed } from '@angular/core/testing';

import { JumbotronService } from './jumbotron.service';

describe('JumbotronService', () => {
  let service: JumbotronService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JumbotronService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
