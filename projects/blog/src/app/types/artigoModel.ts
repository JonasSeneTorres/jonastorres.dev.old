import { Autor } from "./autor";
import { Categoria } from "./categoria";
import { SerieArtigo } from "./serie-artigo";

export type PaginaModel = {
  id: number,
  url: string,
  titulo: string,
  subtitulo?: string,
  metatags?: string[],
  ClassificacaoId: string,
  dataCriacao: Date,
  dataEdicao?: Date,
  dataAgendamento?: Date,
  tempoLeitura: number,
  conteudoArtigo: string,
  autorId:  number,
  serieId?:  number,
}
