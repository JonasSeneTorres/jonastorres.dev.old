import { Component, Injector } from '@angular/core';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { BlogService } from 'projects/blog/src/app/services/blog/blog.service';
import { MasterBaseComponent } from 'projects/guide-dog/src/lib/components/master-base/master-base.component';
import { BreadcrumbsItem } from 'projects/guide-dog/src/lib/types/breadcrumbs-item.type';

import { JumbotronService } from './../../../../services/jumbotron/jumbotron.service';

@Component({
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss'],
})
export class AutoresComponent extends MasterBaseComponent {
  breadcrumbsItem: BreadcrumbsItem[];

  constructor(
    private _blogService: BlogService,
    private _jumbotronService: JumbotronService,
    protected override injector: Injector
  ) {
    super(injector);
    this._blogService.tornarBoxPrincipalTransparente(true);
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
}
