import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ICrudService } from '../../interfaces/icrud-service';

@Injectable({
  providedIn: 'root'
})
export class RedesSociaisService implements ICrudService {
  private baseURL: string = 'http://localhost:3000/redes-sociais';

  constructor(private httpClient: HttpClient) {}

  obter(codigo: string): Observable<any> {
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
