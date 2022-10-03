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
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.scss'],
})
export class GrupoComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  vitrineDados: VitrineDados = {};
  breadcrumbsItem: BreadcrumbsItem[];

  constructor(
    private _artigosService: ArtigosService,
    private _jumbotronService: JumbotronService,
    private _blogService: BlogService,
    private _activatedRoute: ActivatedRoute
  ) {
    this._blogService.tornarBoxPrincipalTransparente(false);
    this.breadcrumbsItem = [];
    this._jumbotronService.inserirDados({
      titulo: '',
      subtitulo: '',
      categoria: '',
      compartilharBox: false,
      dataCriacao: undefined,
      dataEdicao: undefined,
      tempoLeitura: undefined,
    });
  }

  ngOnInit(): void {
    this.chamadasApisExternas();
    this._activatedRoute.params
      .pipe(takeUntil(this._destroy$))
      .subscribe((params: Params) => {
        const labelGrupo = `${params['grupo']}`;
        const routeGrupo = `/blog/${params['grupo']}`;

        this.breadcrumbsItem = [JonastorresRoutes.HOME.toBreadcrumb()];

        if (labelGrupo !== 'categoria') {
          this.breadcrumbsItem.push({ label: labelGrupo, route: [routeGrupo] });
        }
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
          console.log(sucesso);
          this.vitrineDados.ultimosArtigos = sucesso;
        },
        error: () => {},
      });
  }
}
