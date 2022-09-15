import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, forkJoin, takeUntil } from 'rxjs';

import { ArtigosService } from 'projects/blog/src/app/services/artigos/artigos.service';
import { AutoresService } from 'projects/blog/src/app/services/autores/autores.service';
import { BlogService } from 'projects/blog/src/app/services/blog/blog.service';
import { BreadcrumbsItem } from 'projects/guide-dog/src/lib/types/breadcrumbs-item.type';
import { CategoriasService } from 'projects/blog/src/app/services/categorias/categorias.service';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { JumbotronService } from 'projects/blog/src/app/services/jumbotron/jumbotron.service';

@Component({
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.scss']
})
export class ArtigoComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  dadosArtigo: any;
  categorias: any[] = [];
  ultimosArtigos: any[] = [];
  listaArquivoSerie: any[] = [];
  dadosAutor: any;
  categoriaArtigo: string = '';
  breadcrumbsItem: BreadcrumbsItem[];

  constructor(
    private _artigosService: ArtigosService,
    private _categoriasService: CategoriasService,
    private _autoresService: AutoresService,
    private _blogService: BlogService,
    private _jumbotronService: JumbotronService,
    private _activatedRoute: ActivatedRoute
  ) {
    this._blogService.tornarBoxPrincipalTransparente(true);
    this.breadcrumbsItem = [];
  }

  ngOnInit(): void {
    this._activatedRoute.params
    .pipe(takeUntil(this._destroy$))
    .subscribe((params: Params) => {
      const labelGrupo = `${params['grupo']}`;
      const routeGrupo = `/blog/${params['grupo']}`;
      const labelCategoria = `${params['categoria']}`;
      const routeCategoria = `/blog/${params['categoria']}`;
      const labelArtigo = `${params['artigo']}`;
      const routeArtigo = `/blog/${params['artigo']}`;

      this.breadcrumbsItem = [
        JonastorresRoutes.HOME.toBreadcrumb(),
      ];

      if (labelGrupo !== 'categoria') {
        this.breadcrumbsItem.push({ label: labelGrupo, route: [routeGrupo]});
      }
      this.breadcrumbsItem.push({ label: labelCategoria, route: [routeCategoria]});
      this.breadcrumbsItem.push({ label: labelArtigo, route: [routeArtigo]});
    });

    this.obterDadosIniciais(0)
    .pipe(takeUntil(this._destroy$))
    .subscribe((sucesso: any) => {
      this.dadosArtigo = sucesso.artigo;
      this.categorias = sucesso.categorias ?? [];
      this.ultimosArtigos = sucesso.ultimosArtigos ?? [];

      const nomeArtigo = this.categorias.filter( item => item.id === this.dadosArtigo.categoriaId)[0].nome;
      this.categoriaArtigo = (nomeArtigo ?? '').toLowerCase();

      this.obterDadosArtigoSerie()
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (sucessoArtigoSerie : any) => {
          this.listaArquivoSerie = sucessoArtigoSerie;
        }
      );

      this.obterDadosAutor()
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (sucesso: any) => {
          this.dadosAutor = sucesso;
        }
      );
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }


  private obterDadosIniciais(idArtigo: number): Observable<any> {
    const obterArtigo = this._artigosService.obter(idArtigo);
    const obterCategorias = this._categoriasService.listar();
    const obterUltimosArtigos = this._artigosService.listarUltimosArtigos();

    return forkJoin({
      artigo: obterArtigo,
      categorias: obterCategorias,
      ultimosArtigos: obterUltimosArtigos,
    });
  }

  private obterDadosArtigoSerie() {
    const serieId = this.dadosArtigo.serieId;
    return this._artigosService.listarArtigosSerie(serieId);
  }

  private obterDadosAutor() {
    const autorId = this.dadosArtigo.autorId;
    return this._autoresService.obter(autorId);
  }
}
