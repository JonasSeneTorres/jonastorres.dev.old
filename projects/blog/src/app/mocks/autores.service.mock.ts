import { BehaviorSubject, Observable, of, throwError } from 'rxjs';

import { ICrudService } from '../interfaces/icrud-service';

export class AutoresServiceMock implements ICrudService {
  private _itensBuscados$: BehaviorSubject<any> = new BehaviorSubject(null);
  erro = false;

  get itensBuscados$() {
    return this._itensBuscados$.asObservable();
  }

  obter(_codigo: number): Observable<any> {
    if(!this.erro) {
      return of({});
    }

    return throwError(() => new Error('teste de erro'));
  }

  listar(): Observable<any[]> {
    if(!this.erro) {
      return of([{}]);
    }

    return throwError(() => new Error('teste de erro'));
  }

  buscar(_palavraChave: string): Observable<any> {
    if(!this.erro) {
      return of({});
    }

    return throwError(() => new Error('teste de erro'));
  }

  listarUltimosArtigos(): Observable<any> {
    if(!this.erro) {
      return of({});
    }

    return throwError(() => new Error('teste de erro'));
  }

  listarArtigosCategoria(_categoriaId: number): Observable<any> {
    if(!this.erro) {
      return of({});
    }

    return throwError(() => new Error('teste de erro'));
  }

  listarArtigosSerie(_serieId: number): Observable<any> {
    if(!this.erro) {
      return of({});
    }

    return throwError(() => new Error('teste de erro'));
  }

  inserir(_objeto: any): Observable<any> {
    if(!this.erro) {
      return of({});
    }

    return throwError(() => new Error('teste de erro'));
  }

  atualizar(_objeto: any): Observable<any> {
    if(!this.erro) {
      return of({});
    }

    return throwError(() => new Error('teste de erro'));
  }

  apagar(_codigo: number): Observable<any> {
    if(!this.erro) {
      return of({});
    }

    return throwError(() => new Error('teste de erro'));
  }
}
