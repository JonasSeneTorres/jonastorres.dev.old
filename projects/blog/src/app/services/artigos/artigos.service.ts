import { Observable, map } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { ICrudService } from './../../interfaces/icrud-service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtigosService implements ICrudService {
  private baseURL: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  obter(codigo: number): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/artigos/${codigo}`);
  }

  listar(): Observable<any> {
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

  inserir(objeto: any): Observable<any> {
    throw new Error('Method not implemented.');
  }

  atualizar(objeto: any): Observable<any> {
    throw new Error('Method not implemented.');
  }

  apagar(codigo: number): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
