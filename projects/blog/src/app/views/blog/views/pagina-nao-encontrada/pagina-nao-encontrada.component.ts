import { Component, OnDestroy, OnInit } from '@angular/core';

import { BlogService } from 'projects/blog/src/app/services/blog/blog.service';
import { BreadcrumbsItem } from 'projects/guide-dog/src/lib/types/breadcrumbs-item.type';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { JumbotronService } from 'projects/blog/src/app/services/jumbotron/jumbotron.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'jt-pagina-nao-encontrada',
  templateUrl: './pagina-nao-encontrada.component.html',
  styleUrls: ['./pagina-nao-encontrada.component.scss'],
})
export class PaginaNaoEncontradaComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  breadcrumbsItem: BreadcrumbsItem[];

  constructor(private jumbotronService: JumbotronService, private _blogService: BlogService) {
    this._blogService.tornarBoxPrincipalTransparente(true);
    this.breadcrumbsItem = [JonastorresRoutes.HOME.toBreadcrumb(), { label: 'Página não encontrada' }];
  }

  ngOnInit(): void {
    console.log('');
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }
}
