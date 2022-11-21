import { Component, Injector } from '@angular/core';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { BlogService } from 'projects/blog/src/app/services/blog/blog.service';
import { JumbotronService } from 'projects/blog/src/app/services/jumbotron/jumbotron.service';
import { MasterBaseComponent } from 'projects/guide-dog/src/lib/components/master-base/master-base.component';
import { BreadcrumbsItem } from 'projects/guide-dog/src/lib/types/breadcrumbs-item.type';

@Component({
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss'],
})
export class ContatoComponent extends MasterBaseComponent {
  breadcrumbsItem: BreadcrumbsItem[];

  constructor(
    private _jumbotronService: JumbotronService,
    private _blogService: BlogService,
    protected override injector: Injector
  ) {
    super(injector);
    this._blogService.tornarBoxPrincipalTransparente(true);
    this.breadcrumbsItem = [JonastorresRoutes.HOME.toBreadcrumb()];
    this._jumbotronService.inserirDados({
      titulo: 'Contato',
      subtitulo: '',
      categoria: 'contato',
      compartilharBox: false,
      dataCriacao: undefined,
      dataEdicao: undefined,
      tempoLeitura: undefined,
    });
  }
}
