import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/blog/src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

import { ICrudService } from './../../interfaces/icrud-service';

@Injectable({
  providedIn: 'root'
})
export class ArtigosService implements ICrudService {
  private _itensBuscados$: BehaviorSubject<any> = new BehaviorSubject(null);
  private baseURL: string = `${environment.baseURL}/artigos`;

  get itensBuscados$() {
    return this._itensBuscados$.asObservable();
  }

  constructor(private httpClient: HttpClient) {}

  obter(codigo: string): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/${codigo}`);
  }

  listar(): Observable<any> {
    return this.httpClient.get(`${this.baseURL}`);
  }

  buscar(_palavraChave: string): Observable<any> {
    return this.httpClient.get(`${this.baseURL}`);
  }

  listarUltimosArtigos(): Observable<any> {
    return this.httpClient.get(`${this.baseURL}?_sort=id&_order=desc&_limit=5`);
  }

  listarArtigosCategoria(categoriaId: number): Observable<any> {
    return this.httpClient.get(`${this.baseURL}?categoriaId=${categoriaId}`);
  }

  listarArtigosSerie(serieId: number): Observable<any> {
    return this.httpClient.get(`${this.baseURL}?serieId=${serieId}`);
  }

  inserir(value: any): Observable<any> {
    return this.httpClient.post(`${this.baseURL}`, value);
  }

  atualizar(value: any): Observable<any> {
    return this.httpClient.put(`${this.baseURL}/${value.id}`, value);
  }

  apagar(codigo: string): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/${codigo}`);
  }
}
