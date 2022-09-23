import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { ICrudService } from './../../interfaces/icrud-service';

@Injectable({
  providedIn: 'root'
})
export class ArtigosService implements ICrudService {
  private _itensBuscados$: BehaviorSubject<any> = new BehaviorSubject(null);
  private baseURL: string = 'http://localhost:3000';

  get itensBuscados$() {
    return this._itensBuscados$.asObservable();
  }

  constructor(private httpClient: HttpClient) {}

  obter(codigo: string): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/artigos/${codigo}`);
  }

  listar(): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/artigos`);
  }

  buscar(_palavraChave: string): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/artigos`);
  }

  listarUltimosArtigos(): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/artigos?_sort=id&_order=desc&_limit=5`);
  }

  listarArtigosCategoria(categoriaId: number): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/artigos?categoriaId=${categoriaId}`);
  }

  listarArtigosSerie(serieId: number): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/artigos?serieId=${serieId}`);
  }

  inserir(value: any): Observable<any> {
    return this.httpClient.post(`${this.baseURL}/artigos`, value);
  }

  atualizar(value: any): Observable<any> {
    throw new Error('Method not implemented.');
  }

  apagar(codigo: string): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/artigos/${codigo}`);
  }
}
