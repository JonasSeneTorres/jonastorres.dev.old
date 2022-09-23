import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ICrudService } from '../../interfaces/icrud-service';

@Injectable({
  providedIn: 'root'
})
export class AutoresService implements ICrudService {
  private baseURL: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  obter(codigo: string): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/autores/${codigo}`);
  }

  listar(): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/autores`);
  }

  inserir(objeto: any): Observable<any> {
    throw new Error('Method not implemented.');
  }

  atualizar(objeto: any): Observable<any> {
    throw new Error('Method not implemented.');
  }

  apagar(codigo: string): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
