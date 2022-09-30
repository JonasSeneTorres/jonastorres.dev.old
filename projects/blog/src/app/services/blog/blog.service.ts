import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private _boxPrincipalTransparente$ = new BehaviorSubject(false);

  readonly boxPrincipalTransparente: Observable<boolean> =
    this._boxPrincipalTransparente$.asObservable();

  tornarBoxPrincipalTransparente(value: boolean) {
    this._boxPrincipalTransparente$.next(value);
  }
}
