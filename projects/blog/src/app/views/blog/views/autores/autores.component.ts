import { Component, OnDestroy } from '@angular/core';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { BlogService } from 'projects/blog/src/app/services/blog/blog.service';
import { BreadcrumbsItem } from 'projects/guide-dog/src/lib/types/breadcrumbs-item.type';
import { Subject } from 'rxjs';

import { JumbotronService } from './../../../../services/jumbotron/jumbotron.service';

@Component({
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss'],
})
export class AutoresComponent implements OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  breadcrumbsItem: BreadcrumbsItem[];

  constructor(private _blogService: BlogService, private _jumbotronService: JumbotronService) {
    this._blogService.tornarBoxPrincipalTransparente(false);
    this.breadcrumbsItem = [JonastorresRoutes.HOME.toBreadcrumb(), { label: 'Autores' }];
    this._jumbotronService.inserirDados({
      titulo: 'Autores',
      subtitulo: '',
      categoria: 'autores',
      compartilharBox: false,
      dataCriacao: undefined,
      dataEdicao: undefined,
      tempoLeitura: undefined,
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }
}
