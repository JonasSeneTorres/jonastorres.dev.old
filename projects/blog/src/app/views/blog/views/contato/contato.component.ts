import { Component, OnInit } from '@angular/core';

import { BreadcrumbsItem } from 'projects/guide-dog/src/lib/types/breadcrumbs-item.type';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';

@Component({
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent {
  breadcrumbsItem: BreadcrumbsItem[];

  constructor() {
    this.breadcrumbsItem = [
      JonastorresRoutes.HOME.toBreadcrumb(),
      // JonastorresRoutes.ADMIN.toBreadcrumb(),
      // JonastorresRoutes.ADMIN_ARTIGOS.toBreadcrumb(),
    ];
  }
}
