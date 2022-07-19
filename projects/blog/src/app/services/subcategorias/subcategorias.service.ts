import { HttpClient } from '@angular/common/http';
import { ICrudService } from '../../interfaces/icrud-service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriasService implements ICrudService {

  private baseURL: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  obter(codigo: number): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/subcategorias/${codigo}`);
  }
  listar(): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/subcategorias`);
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
