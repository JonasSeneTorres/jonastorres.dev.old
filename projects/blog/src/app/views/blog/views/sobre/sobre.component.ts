import { Component, Injector } from '@angular/core';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { BlogService } from 'projects/blog/src/app/services/blog/blog.service';
import { JumbotronService } from 'projects/blog/src/app/services/jumbotron/jumbotron.service';
import { MasterBaseComponent } from 'projects/guide-dog/src/lib/components/master-base/master-base.component';
import { BreadcrumbsItem } from 'projects/guide-dog/src/lib/types/breadcrumbs-item.type';

@Component({
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
})
export class SobreComponent extends MasterBaseComponent {
  breadcrumbsItem: BreadcrumbsItem[];

  constructor(
    private jumbotronService: JumbotronService,
    private _blogService: BlogService,
    private _jumbotronService: JumbotronService,
    protected override injector: Injector
  ) {
    super(injector);
    this.breadcrumbsItem = [JonastorresRoutes.HOME.toBreadcrumb(), { label: 'Sobre' }];

    this._blogService.tornarBoxPrincipalTransparente(true);
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
}
