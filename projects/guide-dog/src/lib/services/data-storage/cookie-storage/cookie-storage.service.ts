import { BehaviorSubject } from 'rxjs';
import { IStorageService } from '../../../interfaces/iStorageService';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CookieStorageService /*implements IStorageService*/ {
  constructor() {}

  // get(key: string): string {
  //   return this.cookieService.get(key);
  // }

  // set(key: string, value: any): void {
  //   const inputValue = JSON.stringify(value);
  //   this.cookieService.set(key, inputValue);
  // }

  // removeItem(key: string): void {
  //   this.cookieService.delete(key);
  // }

  // clear(): void {
  //   this.cookieService.deleteAll();
  // }
}
