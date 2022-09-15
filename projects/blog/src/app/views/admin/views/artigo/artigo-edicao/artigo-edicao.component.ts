import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { BreadcrumbsItem } from 'projects/guide-dog/src/lib/types/breadcrumbs-item.type';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';

@Component({
  selector: 'jt-artigo-edicao',
  templateUrl: './artigo-edicao.component.html',
  styleUrls: ['./artigo-edicao.component.scss'],
})
export class ArtigoEdicaoComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  breadcrumbsItem: BreadcrumbsItem[];
  id = '';

  private routeParams$: any;

  constructor(private route: ActivatedRoute) {
    this.breadcrumbsItem = [
      JonastorresRoutes.HOME.toBreadcrumb(),
      JonastorresRoutes.ADMIN.toBreadcrumb(),
      JonastorresRoutes.ADMIN_ARTIGOS.toBreadcrumb(),
    ];
  }

  ngOnInit() {
    this.routeParams$ = this.route.params
    .pipe(takeUntil(this._destroy$))
    .subscribe((params) => {
      this.id = params['id'] ?? '';

      const breadcrumbNovo = JonastorresRoutes.ADMIN_ARTIGOS_NOVO.toBreadcrumb();
      const breadcrumbEditar = JonastorresRoutes.ADMIN_ARTIGOS_EDITAR.toBreadcrumb();
      this.ajustarBreadcrumb(this.id, breadcrumbNovo, breadcrumbEditar);
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }

  private ajustarBreadcrumb(id: string, breadcrumbNovo: BreadcrumbsItem, breadcrumbEditar: BreadcrumbsItem) {
    let complementoBreadcrumbs = breadcrumbNovo;
    if (id.length > 0) {
      complementoBreadcrumbs = breadcrumbEditar;
    }

    this.breadcrumbsItem.push(complementoBreadcrumbs);
  }
}
