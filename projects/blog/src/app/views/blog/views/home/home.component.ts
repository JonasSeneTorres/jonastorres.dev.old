import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';

import { ArtigosService } from 'projects/blog/src/app/services/artigos/artigos.service';
import { BlogService } from 'projects/blog/src/app/services/blog/blog.service';
import { BreadcrumbsItem } from 'projects/guide-dog/src/lib/types/breadcrumbs-item.type';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { JumbotronService } from 'projects/blog/src/app/services/jumbotron/jumbotron.service';
import { VitrineDados } from 'projects/blog/src/app/types/vitrine-dados.type';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  vitrineDados: VitrineDados = {};

  constructor(
    private _artigosService: ArtigosService,
    private _blogService: BlogService,
    private _jumbotronService: JumbotronService,
    ) {
      this._blogService.tornarBoxPrincipalTransparente(false);
      this._jumbotronService.dadosJumbotrom$ = null;
    }

  ngOnInit(): void {
    this.chamadasApisExternas();
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
          this.vitrineDados.ultimosArtigos = sucesso
        },
        error: () => { },
      });
  }
}
