import { BehaviorSubject, Observable } from 'rxjs';

import { IStorageService } from '../../../interfaces/iStorageService';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemoryStorageService implements IStorageService {
  private _value: any = {};
  private _dataSource = new BehaviorSubject<any>({});
  data$: Observable<any> = this._dataSource.asObservable();

  constructor() {
    this.data$.subscribe(
      data => {
        this._value = data;
      }
    );
  }

  get(key: string): any {
    return this._value[key];
  }

  set(key: string, value: any): void {
    const newValue = this._value;
    newValue[key] = value;
    this._dataSource.next(newValue);
  }

  removeItem(key: string): void {
    const newValue = this._value;
    delete newValue[key];
    this._dataSource.next(newValue);
  }

  clear(): void {
    this._dataSource.next({});
  }
}
