import { HttpClient } from '@angular/common/http';
import { ICrudService } from './../../interfaces/icrud-service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtigosService implements ICrudService {
  private baseURL: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  obter(codigo: number) {
    return this.httpClient.get(`${this.baseURL}/artigos`);
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
