import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { Injectable, OnDestroy } from '@angular/core';

import { IStorageService } from '../../../interfaces/iStorageService';

@Injectable({
  providedIn: 'root'
})
export class MemoryStorageService implements IStorageService, OnDestroy {
  private _value: any = {};
  private _dataSource = new BehaviorSubject<any>({});
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  data$: Observable<any> = this._dataSource.asObservable();

  constructor() {
    this.data$
    .pipe(takeUntil(this._destroy$))
    .subscribe(
      data => {
        this._value = data;
      }
    );
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }

  get(key: string): any | any[] {
    return this._value[key];
  }

  set(key: string, value: any | any[]): void {
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
