import { Guid } from 'guid-typescript';

export type ArtigoModel = {
  id: Guid,
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
