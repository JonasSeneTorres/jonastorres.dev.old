import { Observable } from "rxjs";

export interface ICrudService {
  obter(codigo: number): Observable<any>;
  listar(): Observable<any>;
  inserir(objeto: any): Observable<any>;
  atualizar(objeto: any): Observable<any>;
  apagar(codigo: number): Observable<any>;
}
