import { Component } from '@angular/core';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { JumbotronService } from 'projects/blog/src/app/services/jumbotron/jumbotron.service';
import { BreadcrumbsItem } from 'projects/guide-dog/src/lib/types/breadcrumbs-item.type';

@Component({
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss'],
})
export class ContatoComponent {
  breadcrumbsItem: BreadcrumbsItem[];

  constructor(private _jumbotronService: JumbotronService) {
    this.breadcrumbsItem = [JonastorresRoutes.HOME.toBreadcrumb()];
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
