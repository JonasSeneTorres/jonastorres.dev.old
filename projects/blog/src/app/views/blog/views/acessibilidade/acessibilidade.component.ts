import { Component } from '@angular/core';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { BlogService } from 'projects/blog/src/app/services/blog/blog.service';
import { JumbotronService } from 'projects/blog/src/app/services/jumbotron/jumbotron.service';
import { BreadcrumbsItem } from 'projects/guide-dog/src/lib/types/breadcrumbs-item.type';

@Component({
  selector: 'jt-acessibilidade',
  templateUrl: './acessibilidade.component.html',
  styleUrls: ['./acessibilidade.component.scss'],
})
export class AcessibilidadeComponent {
  breadcrumbsItem: BreadcrumbsItem[];

  constructor(
    private _blogService: BlogService,
    private _jumbotronService: JumbotronService
  ) {
    this.breadcrumbsItem = [
      JonastorresRoutes.HOME.toBreadcrumb(),
      { label: 'acessibilidade' },
    ];
    this._blogService.tornarBoxPrincipalTransparente(true);
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
}
