import { Autor } from "./autor";
import { Categoria } from "./categoria";
import { SerieArtigo } from "./serie-artigo";

export type PaginaArtigo = {
  titulo: string;
  subtitulo: string;
  categoria: string;
  dataCriacao: Date;
  dataEdicao?: Date;
  tempoLeitura: number;
  conteudoArtigo: string;
  listaSerieArtigo?: SerieArtigo[];
  autor: Autor;
  listaCategoria?: Categoria[];
  listaUltimosPosts?: SerieArtigo[];
}
