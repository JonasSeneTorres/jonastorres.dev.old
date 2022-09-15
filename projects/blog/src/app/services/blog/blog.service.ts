import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private _boxPrincipalTransparente$ = new BehaviorSubject(false);

  readonly boxPrincipalTransparente: Observable<boolean> =  this._boxPrincipalTransparente$.asObservable();

  tornarBoxPrincipalTransparente(value: boolean) {
    this._boxPrincipalTransparente$.next(value);
  }
}
