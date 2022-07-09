import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { BehaviorSubject, Observable, forkJoin, of } from 'rxjs';

import { ArtigosService } from '../../services/artigos/artigos.service';
import { Categoria } from '../../types/categoria';
import { Injectable } from '@angular/core';
import { MemoryStorageService } from 'projects/guide-dog/src/lib/services/data-storage/memory-storage/memory-storage.service';
import { PaginaArtigo } from '../../types/pagina-artigo';
import { SerieArtigo } from '../../types/serie-artigo';

@Injectable({
  providedIn: 'root',
})
export class ArtigoResolver implements Resolve<PaginaArtigo | undefined> {
  private readonly novaPagina: PaginaArtigo = {
    titulo: '',
    subtitulo: '',
    categoria: '',
    dataCriacao: new Date(),
    dataEdicao: undefined,
    tempoLeitura: 0,
    conteudoArtigo: '',
    listaSerieArtigo: [],
    autor: {
      urlFoto: '',
      nome: '',
      bio: ''
    },
    listaCategoria: [],
    listaUltimosPosts: [],
  };

  private resolver = new BehaviorSubject<PaginaArtigo | undefined>(undefined);

  constructor(
    // private memoryStorageService: MemoryStorageService,
    private artigosService: ArtigosService,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<PaginaArtigo | undefined> {
    const idArtigo = route.params['id'];


    this.requisicoesIniciais(idArtigo).subscribe(
      (sucesso) => {
      let novoResultado: PaginaArtigo = this.novaPagina;

      // novoResultado = sucesso.artigo;
      novoResultado.titulo = sucesso.artigo.titulo;
      novoResultado.subtitulo = sucesso.artigo.subtitulo;
      novoResultado.categoria = sucesso.artigo.categoria;
      novoResultado.dataCriacao  = new Date(sucesso.artigo.dataCriacao);
      // novoResultado.dataEdicao  = sucesso.artigo.dataEdicao ? new Date() : undefined;
      novoResultado.tempoLeitura = sucesso.artigo.tempoLeitura;
      novoResultado.conteudoArtigo = sucesso.artigo.conteudoArtigo;
      novoResultado.listaCategoria = [] // sucesso.categorias;
      novoResultado.listaUltimosPosts = []; // sucesso.ultimosArtigos;
      console.log('aaa', novoResultado)
      console.log('bbb', sucesso)

      this.resolver.next(novoResultado);
    });

    return this.resolver;
  }

  private requisicoesIniciais(idArtigo: number = 0) {
    const requisicoes = [];

    // const obterUltimosArtigos: SerieArtigo[] =
    //   this.memoryStorageService.get('ultimos_artigos') ?? [];
    // const obterCategorias: Categoria[] =
    //   this.memoryStorageService.get('categorias') ?? [];
    const obterArtigo = this.artigosService.obter(idArtigo);

    // requisicoes.push(obterUltimosArtigos);
    // requisicoes.push(obterCategorias);
    requisicoes.push(obterArtigo);

    return forkJoin({
      artigo: obterArtigo,
      // categorias: of(obterCategorias),
      // ultimosArtigos: of(obterUltimosArtigos),
    });
  }
}
