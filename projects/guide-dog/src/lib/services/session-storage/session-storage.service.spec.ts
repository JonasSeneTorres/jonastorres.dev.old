import { CookieStorageService } from '../cookie-storage/cookie-storage.service';
import { SessionStorageService } from './session-storage.service';
import { TestBed } from '@angular/core/testing';

describe('SessionStorageService', () => {
  let service: SessionStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CookieStorageService
      ]
    });
    service = TestBed.inject(SessionStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
