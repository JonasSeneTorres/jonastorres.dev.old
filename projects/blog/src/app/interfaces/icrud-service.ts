export interface ICrudService {
  obter(codigo: number): any;
  listar(): any[];
  inserir(objeto: any): any;
  atualizar(objeto: any): any;
  apagar(codigo: number): void;
}
