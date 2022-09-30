import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { ArtigosService } from 'projects/blog/src/app/services/artigos/artigos.service';
import { BlogService } from 'projects/blog/src/app/services/blog/blog.service';
import { CategoriasService } from 'projects/blog/src/app/services/categorias/categorias.service';
import { JumbotronService } from 'projects/blog/src/app/services/jumbotron/jumbotron.service';
import { BreadcrumbsItem } from 'projects/guide-dog/src/lib/types/breadcrumbs-item.type';
import { forkJoin, Observable, Subject, takeUntil } from 'rxjs';

@Component({
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
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
        const labelGrupo = `${params['grupo']}`;
        const routeGrupo = `/blog/${params['grupo']}`;
        const labelCategoria = `${params['categoria']}`;
        const routeCategoria = `/blog/${params['categoria']}`;

        this.breadcrumbsItem = [JonastorresRoutes.HOME.toBreadcrumb()];

        if (labelGrupo !== 'categoria') {
          this.breadcrumbsItem.push({ label: labelGrupo, route: [routeGrupo] });
        }
        this.breadcrumbsItem.push({
          label: labelCategoria,
          route: [routeCategoria],
        });
      });

    this.obterDadosIniciais(1)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        sucesso => {
          this.dadosArtigo = sucesso.artigo;
        },
        (erro: any) => {
          console.error(erro);
        }
      );
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }

  private obterDadosIniciais(idCategoria: number): Observable<any> {
    const obterArtigos = this._artigosService.listar();

    return forkJoin({
      artigo: obterArtigos,
    });
  }

  // private montarArtigosDaCategoria(subcategorias: any[], artigosDaCategoria: any[]) {
  //   let output = [];
  //   for (const item of subcategorias) {
  //     const subcategoriaItem = item.nome;
  //     const colecaoArtigos = artigosDaCategoria.filter(
  //       artigo => artigo.subCategoriaId === item.id
  //     )

  //     output.push({
  //       subcategoria: subcategoriaItem,
  //       artigos: colecaoArtigos
  //     });
  //   }

  //   return output;
  // }
}
