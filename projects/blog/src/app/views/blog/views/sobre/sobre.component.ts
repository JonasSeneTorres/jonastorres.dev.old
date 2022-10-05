import { Component, OnDestroy, OnInit } from '@angular/core';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { BlogService } from 'projects/blog/src/app/services/blog/blog.service';
import { JumbotronService } from 'projects/blog/src/app/services/jumbotron/jumbotron.service';
import { BreadcrumbsItem } from 'projects/guide-dog/src/lib/types/breadcrumbs-item.type';
import { Subject } from 'rxjs';

@Component({
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
})
export class SobreComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  breadcrumbsItem: BreadcrumbsItem[];

  constructor(
    private jumbotronService: JumbotronService,
    private _blogService: BlogService,
    private _jumbotronService: JumbotronService
  ) {
    this._blogService.tornarBoxPrincipalTransparente(false);
    this.breadcrumbsItem = [JonastorresRoutes.HOME.toBreadcrumb(), { label: 'Sobre' }];

    this._blogService.tornarBoxPrincipalTransparente(false);
    this._jumbotronService.inserirDados({
      titulo: 'Sobre',
      subtitulo: '',
      categoria: 'sobre',
      compartilharBox: false,
      dataCriacao: undefined,
      dataEdicao: undefined,
      tempoLeitura: undefined,
    });
  }

  ngOnInit(): void {
    console.log('');
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }
}
