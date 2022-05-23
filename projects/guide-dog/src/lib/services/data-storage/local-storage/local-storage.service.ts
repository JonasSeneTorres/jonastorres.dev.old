import { CookieStorageService } from '../cookie-storage/cookie-storage.service';
import { IStorageService } from '../../../interfaces/iStorageService';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService implements IStorageService {
  private storage = window.localStorage;

  constructor(private cookieStorage: CookieStorageService) {
    const warnMessage = 'Your browser does not have access to the "localStorage" feature.\nInstead, "Cookies" will be used.';
    this.storage = window.localStorage;

    if (!this.storage) {
      console.warn(warnMessage);
    }
  }

  get(key: string): any {
    if (this.storage) {
      const output = this.storage.getItem(key) as string;
      return JSON.parse(output);
    }

    this.cookieStorage.get(key);
  }

  set(key: string, value: any): void {
    if (this.storage) {
      this.storage.setItem(key, JSON.stringify(value));
      return;
    }

    this.cookieStorage.set(key, value);
  }

  removeItem(key: string): void {
    if (this.storage) {
      this.storage.removeItem(key);
      return;
    }

    this.cookieStorage.removeItem(key);
  }

  clear(): void {
    if (this.storage) {
      this.storage.clear();
      return;
    }

    this.cookieStorage.clear();
  }
}
