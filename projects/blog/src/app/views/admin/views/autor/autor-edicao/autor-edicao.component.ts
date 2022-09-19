import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { BreadcrumbsItem } from 'projects/guide-dog/src/lib/types/breadcrumbs-item.type';
import { Subject, takeUntil } from 'rxjs';

@Component({
  templateUrl: './autor-edicao.component.html',
  styleUrls: ['./autor-edicao.component.scss'],
})
export class AutorEdicaoComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  breadcrumbsItem: BreadcrumbsItem[];
  id = '';

  constructor(protected route: ActivatedRoute) {
    this.breadcrumbsItem = [
      JonastorresRoutes.HOME.toBreadcrumb(),
      JonastorresRoutes.ADMIN.toBreadcrumb(),
      JonastorresRoutes.ADMIN_AUTOR.toBreadcrumb(),
    ];
  }

  ngOnInit() {
    this.route.params.pipe(takeUntil(this._destroy$)).subscribe((params) => {
      this.id = params['id'] ?? '';

      const breadcrumbNovo = JonastorresRoutes.ADMIN_AUTOR_NOVO.toBreadcrumb();
      const breadcrumbEditar =
        JonastorresRoutes.ADMIN_AUTOR_EDITAR.toBreadcrumb();
      this.ajustarBreadcrumb(this.id, breadcrumbNovo, breadcrumbEditar);
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }

  private ajustarBreadcrumb(
    id: string,
    breadcrumbNovo: BreadcrumbsItem,
    breadcrumbEditar: BreadcrumbsItem
  ) {
    let complementoBreadcrumbs = breadcrumbNovo;
    if (id.length > 0) {
      complementoBreadcrumbs = breadcrumbEditar;
    }

    this.breadcrumbsItem.push(complementoBreadcrumbs);
  }
}
