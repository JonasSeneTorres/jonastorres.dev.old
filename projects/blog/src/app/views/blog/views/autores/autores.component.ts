import { Component, OnDestroy, OnInit } from '@angular/core';

import { BlogService } from 'projects/blog/src/app/services/blog/blog.service';
import { BreadcrumbsItem } from 'projects/guide-dog/src/lib/types/breadcrumbs-item.type';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { Subject } from 'rxjs';

@Component({
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss'],
})
export class AutoresComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  breadcrumbsItem: BreadcrumbsItem[];

  constructor(private _blogService: BlogService) {
    this._blogService.tornarBoxPrincipalTransparente(false);
    this.breadcrumbsItem = [
      JonastorresRoutes.HOME.toBreadcrumb(),
      { label: 'Autores' },
    ];
  }

  ngOnInit(): void {
    console.log('');
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }
}
