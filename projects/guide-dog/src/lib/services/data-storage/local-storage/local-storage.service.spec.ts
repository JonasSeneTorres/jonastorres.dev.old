import { CookieStorageService } from '../cookie-storage/cookie-storage.service';
import { LocalStorageService } from './local-storage.service';
import { TestBed } from '@angular/core/testing';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CookieStorageService],
    });
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
