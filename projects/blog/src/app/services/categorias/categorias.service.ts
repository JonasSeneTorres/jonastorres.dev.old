import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ICrudService } from '../../interfaces/icrud-service';
import { environment } from 'projects/blog/src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService implements ICrudService {
  private baseURL: string = `${environment.baseURL}/categorias`;

  constructor(private httpClient: HttpClient) {}

  obter(codigo: string): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/${codigo}`);
  }

  obterPorUrl(codigo: string): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/${codigo}`);
  }

  listar(): Observable<any> {
    return this.httpClient.get(`${this.baseURL}`);
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
