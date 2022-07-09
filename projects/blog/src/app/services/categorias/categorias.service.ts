import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICrudService } from '../../interfaces/icrud-service';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService implements ICrudService {

  private baseURL: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  obter(codigo: number): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/categorias/${codigo}`);
  }
  listar(): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/categorias`);
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
