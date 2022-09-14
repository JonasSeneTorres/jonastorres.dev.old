import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JumbotronService {
  private _dadosJumbotrom$: BehaviorSubject<any> = new BehaviorSubject(null);

  get dadosJumbotrom$(): Observable<any> {
    return this._dadosJumbotrom$.asObservable();
  }

  set dadosJumbotrom$(value: any) {
    this._dadosJumbotrom$.next(value);
  }
}
