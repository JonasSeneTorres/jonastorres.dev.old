import { SystemInformationService } from './system-information.service';
import { TestBed } from '@angular/core/testing';

describe('SystemInformationService', () => {
  let service: SystemInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
