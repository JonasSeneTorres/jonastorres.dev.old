import { Observable } from 'rxjs';

export interface ICrudService {
  obter(codigo: string): Observable<any>;
  listar(): Observable<any>;
  inserir(objeto: any): Observable<any>;
  atualizar(objeto: any): Observable<any>;
  apagar(codigo: string): Observable<any>;
}
