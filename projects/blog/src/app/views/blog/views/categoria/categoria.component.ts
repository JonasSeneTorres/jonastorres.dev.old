import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { ArtigosService } from 'projects/blog/src/app/services/artigos/artigos.service';
import { BlogService } from 'projects/blog/src/app/services/blog/blog.service';
import { JumbotronService } from 'projects/blog/src/app/services/jumbotron/jumbotron.service';
import { VitrineDados } from 'projects/blog/src/app/types/vitrine-dados.type';
import { BreadcrumbsItem } from 'projects/guide-dog/src/lib/types/breadcrumbs-item.type';
import { Subject, takeUntil } from 'rxjs';

@Component({
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  private classificacaoAtiva = '';
  private categoriaAtiva = '';
  breadcrumbsItem: BreadcrumbsItem[];
  vitrineDados: VitrineDados = { ultimosArtigos: [] };

  constructor(
    private _artigosService: ArtigosService,
    private _blogService: BlogService,
    private _jumbotronService: JumbotronService,
    private _activatedRoute: ActivatedRoute
  ) {
    this._blogService.tornarBoxPrincipalTransparente(false);
    this._jumbotronService.inserirDados({
      titulo: '',
      subtitulo: '',
      categoria: '',
      compartilharBox: false,
      dataCriacao: undefined,
      dataEdicao: undefined,
      tempoLeitura: undefined,
    });
    this.breadcrumbsItem = [];
  }

  ngOnInit(): void {
    this.chamadasApisExternas();
    this._activatedRoute.params.pipe(takeUntil(this._destroy$)).subscribe((params: Params) => {
      const labelGrupo = `${params['grupo']}`;
      const routeGrupo = `/blog/${params['grupo']}`;
      const labelCategoria = `${params['categoria']}`;
      const routeCategoria = `/blog/${params['categoria']}`;

      this.breadcrumbsItem = [JonastorresRoutes.HOME.toBreadcrumb()];

      if (labelGrupo !== 'categorias') {
        this.breadcrumbsItem.push({ label: labelGrupo, route: [routeGrupo] });
      }
      this.breadcrumbsItem.push({
        label: labelCategoria,
        route: [routeCategoria],
      });

      this.classificacaoAtiva = labelGrupo.toLowerCase();
      this.categoriaAtiva = labelCategoria.toLowerCase();
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }

  private chamadasApisExternas() {
    this._artigosService
      .listarUltimosArtigos()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (sucesso: any) => {
          this.vitrineDados.ultimosArtigos = sucesso;
        },
        error: () => {},
      });
  }
}
