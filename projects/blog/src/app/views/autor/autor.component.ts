import { Component, OnInit } from '@angular/core';

import { BreadcrumbsItem } from 'projects/guide-dog/src/lib/types/breadcrumbs-item.type';
import { JonastorresRoutes } from '../../enuns/jonastorres-routes.enum';
import { LocalStorageService } from 'projects/guide-dog/src/lib/services/data-storage/local-storage/local-storage.service';
import { SessionStorageService } from 'projects/guide-dog/src/lib/services/data-storage/session-storage/session-storage.service';

@Component({
  selector: 'jt-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.scss'],
})
export class AutorComponent {
  breadcrumbsItem: BreadcrumbsItem[];

  constructor(private local: SessionStorageService) {
    this.local.set('LocalStorageService', { teste: 1 });

    this.breadcrumbsItem = [
      JonastorresRoutes.HOME.toBreadcrumb(),
      JonastorresRoutes.ADMIN.toBreadcrumb(),
      JonastorresRoutes.ADMIN_ARTIGOS.toBreadcrumb(),
    ];
  }

}
