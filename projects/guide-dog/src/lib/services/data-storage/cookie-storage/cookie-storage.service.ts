import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

import { IStorageService } from '../../../interfaces/iStorageService';

@Injectable({
  providedIn: 'root',
})
export class CookieStorageService implements IStorageService {
  private cookie: any;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.cookie = this.document.cookie;
  }

  get(key: string): string {
    type ObjectKey = keyof typeof this.cookie;
    const property = key as ObjectKey;

    const output = this.cookie[property] ?? '';
    console.log(output);
    return output.toString();
  }

  set(key: string, value: any): void {
    type ObjectKey = keyof typeof this.cookie;
    const property = key as ObjectKey;
    let input = JSON.parse(this.cookie);

    input[property] = value;
    this.cookie = JSON.stringify(input);
  }

  removeItem(key: string): void {
    type ObjectKey = keyof typeof this.cookie;
    const property = key as ObjectKey;
    let input = JSON.parse(this.cookie);

    delete input[property];
    this.cookie = JSON.stringify(input);
  }

  clear(): void {
    this.cookie = '';
  }
}
