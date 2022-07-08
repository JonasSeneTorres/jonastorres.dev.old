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
import { SerieArtigo } from '../../types/serie-artigo';
import { paginaArtigo } from '../../types/pagina-artigo';

@Injectable({
  providedIn: 'root',
})
export class ArtigoResolver implements Resolve<paginaArtigo | undefined> {
  private readonly novaPagina: paginaArtigo = {
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

  private resolver = new BehaviorSubject<paginaArtigo | undefined>(undefined);

  constructor(
    private memoryStorageService: MemoryStorageService,
    private artigosService: ArtigosService
  ) {}

  resolve(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<paginaArtigo | undefined> {
    this.requisicoesIniciais().subscribe(
      (sucesso) => {
      let novoResultado: paginaArtigo = this.novaPagina;

      novoResultado.listaCategoria = sucesso.categorias;
      novoResultado.listaUltimosPosts = sucesso.ultimosArtigos;

      this.resolver.next(novoResultado);
    });

    return this.resolver.asObservable();
  }

  private requisicoesIniciais() {
    const requisicoes = [];

    const obterUltimosArtigos: SerieArtigo[] =
      this.memoryStorageService.get('ultimos_artigos') ?? [];
    const obterCategorias: Categoria[] =
      this.memoryStorageService.get('categorias') ?? [];
    const obterArtigo = this.artigosService.obter(0);

    requisicoes.push(obterUltimosArtigos);
    requisicoes.push(obterCategorias);
    requisicoes.push(obterArtigo);

    return forkJoin({
      artigo: obterArtigo,
      categorias: of(obterCategorias),
      ultimosArtigos: of(obterUltimosArtigos),
    });
  }
}
