import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { IStorageService } from '../../../interfaces/iStorageService';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieStorageService implements IStorageService{


  constructor(private cookieService: CookieService) {

  }

  get(key: string): string {
    return this.cookieService.get(key);
  }

  set(key: string, value: any): void {
    const inputValue = JSON.stringify(value);
    this.cookieService.set(key, inputValue);
  }

  removeItem(key: string): void {
    this.cookieService.delete(key);
  }

  clear(): void {
    this.cookieService.deleteAll();
  }
}
