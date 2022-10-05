import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Jumbotron } from './../../types/jumbotron.type';

@Injectable({
  providedIn: 'root',
})
export class JumbotronService {
  private _valorInicial: Jumbotron = {
    titulo: '',
    subtitulo: '',
    categoria: '',
    compartilharBox: false,
    dataCriacao: undefined,
    dataEdicao: undefined,
    tempoLeitura: undefined,
  };
  private _dadosJumbotrom$: BehaviorSubject<Jumbotron> = new BehaviorSubject(this._valorInicial);

  get dadosJumbotron$(): Observable<Jumbotron> {
    return this._dadosJumbotrom$.asObservable();
  }

  inserirDados(value: Jumbotron) {
    this._dadosJumbotrom$.next(value);
  }
}
