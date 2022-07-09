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
    return this.httpClient.get(`${this.baseURL}/artigos`).pipe(
      map((item: any) => item[0])
    );
  }
  listar(): any[] {
    throw new Error('Method not implemented.');
  }
  inserir(objeto: any) {
    throw new Error('Method not implemented.');
  }
  atualizar(objeto: any) {
    throw new Error('Method not implemented.');
  }
  apagar(codigo: number): void {
    throw new Error('Method not implemented.');
  }

}
