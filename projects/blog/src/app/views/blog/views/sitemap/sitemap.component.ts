import { Component } from '@angular/core';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { BlogService } from 'projects/blog/src/app/services/blog/blog.service';
import { JumbotronService } from 'projects/blog/src/app/services/jumbotron/jumbotron.service';
import { BreadcrumbsItem } from 'projects/guide-dog/src/lib/types/breadcrumbs-item.type';

@Component({
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.scss'],
})
export class SitemapComponent {
  breadcrumbsItem: BreadcrumbsItem[];

  constructor(private _blogService: BlogService, private _jumbotronService: JumbotronService) {
    this.breadcrumbsItem = [JonastorresRoutes.HOME.toBreadcrumb(), { label: 'Mapa do site' }];
    this._blogService.tornarBoxPrincipalTransparente(false);
    this._jumbotronService.inserirDados({
      titulo: 'Mapa do site',
      subtitulo: '',
      categoria: 'sitemap',
      compartilharBox: false,
      dataCriacao: undefined,
      dataEdicao: undefined,
      tempoLeitura: undefined,
    });
  }
}
