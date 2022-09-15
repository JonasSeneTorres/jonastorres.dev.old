import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, forkJoin, takeUntil } from 'rxjs';

import { ArtigosService } from 'projects/blog/src/app/services/artigos/artigos.service';
import { BlogService } from 'projects/blog/src/app/services/blog/blog.service';
import { BreadcrumbsItem } from 'projects/guide-dog/src/lib/types/breadcrumbs-item.type';
import { CategoriasService } from 'projects/blog/src/app/services/categorias/categorias.service';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { JumbotronService } from 'projects/blog/src/app/services/jumbotron/jumbotron.service';
import { SubcategoriasService } from './../../../../services/subcategorias/subcategorias.service';

@Component({
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  dadosArtigo: any;
  categorias: any[] = [];
  subcategorias: any = [];
  ultimosArtigos: any[] = [];
  artigosDaCategoria: any[] = [];
  breadcrumbsItem: BreadcrumbsItem[];

  constructor(
    private _artigosService: ArtigosService,
    private _categoriasService: CategoriasService,
    private _subcategoriasService: SubcategoriasService,
    private _blogService: BlogService,
    private _jumbotronService: JumbotronService,
    private _activatedRoute: ActivatedRoute
  ) {
    this._blogService.tornarBoxPrincipalTransparente(false);
    this.breadcrumbsItem = [];
  }

  ngOnInit(): void {
    this._activatedRoute.params
    .pipe(takeUntil(this._destroy$))
    .subscribe((params: Params) => {
      console.log(params);
      console.log(this._activatedRoute.snapshot.data);

      // this.breadcrumbsItem = [
      //   JonastorresRoutes.HOME.toBreadcrumb(),
      // ];

      const labelGrupo = `${params['grupo']}`;
      const routeGrupo = `/blog/${params['grupo']}`;
      const labelCategoria = `${params['categoria']}`;
      const routeCategoria = `/blog/${params['categoria']}`;

      this.breadcrumbsItem = [
        JonastorresRoutes.HOME.toBreadcrumb(),
      ];

      if (labelGrupo !== 'categoria') {
        this.breadcrumbsItem.push({ label: labelGrupo, route: [routeGrupo]});
      }
      this.breadcrumbsItem.push({ label: labelCategoria, route: [routeCategoria]});
    });

    this.obterDadosIniciais(1).pipe(takeUntil(this._destroy$)).subscribe((sucesso) => {
      this.dadosArtigo = sucesso.artigo;
      this.categorias = sucesso.categorias;
      this.ultimosArtigos = sucesso.ultimosArtigos;
      this.subcategorias = sucesso.subcategorias;
      this.artigosDaCategoria = this.montarArtigosDaCategoria(this.subcategorias, sucesso.artigosDaCategoria);
    },
    (erro: any) => {
      console.error(erro);
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }

  private obterDadosIniciais(idCategoria: number): Observable<any> {
    const obterArtigo = this._categoriasService.obter(idCategoria);
    const obterCategorias = this._categoriasService.listar();
    const obterSubcategorias = this._subcategoriasService.listar();
    const obterUltimosArtigos = this._artigosService.listarUltimosArtigos();
    const obterArtigosDaCategoria = this._artigosService.listarArtigosCategoria(idCategoria);

    return forkJoin({
      artigo: obterArtigo,
      categorias: obterCategorias,
      subcategorias: obterSubcategorias,
      ultimosArtigos: obterUltimosArtigos,
      artigosDaCategoria: obterArtigosDaCategoria,
    });
  }

  private montarArtigosDaCategoria(subcategorias: any[], artigosDaCategoria: any[]) {
    let output = [];
    for (const item of subcategorias) {
      const subcategoriaItem = item.nome;
      const colecaoArtigos = artigosDaCategoria.filter(
        artigo => artigo.subCategoriaId === item.id
      )

      output.push({
        subcategoria: subcategoriaItem,
        artigos: colecaoArtigos
      });
    }

    return output;
  }
}
