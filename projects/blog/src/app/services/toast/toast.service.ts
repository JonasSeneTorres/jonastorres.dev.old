import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private _itensBuscados$: BehaviorSubject<any> = new BehaviorSubject({
    titulo: null,
    mensagem: null,
    icone: null
  });

  constructor() { }

  get itensBuscados$() {
    return this._itensBuscados$.asObservable();
  }

  ativarToast(titulo: string, mensagem: string, icone: string = 'success') {
    this._itensBuscados$.next({titulo, mensagem, icone});
  }
}
