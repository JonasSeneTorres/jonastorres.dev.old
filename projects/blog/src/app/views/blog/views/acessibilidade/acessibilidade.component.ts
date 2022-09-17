import { Component, OnDestroy, OnInit } from '@angular/core';

import { BreadcrumbsItem } from 'projects/guide-dog/src/lib/types/breadcrumbs-item.type';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { Subject } from 'rxjs';

@Component({
  selector: 'jt-acessibilidade',
  templateUrl: './acessibilidade.component.html',
  styleUrls: ['./acessibilidade.component.scss']
})
export class AcessibilidadeComponent {
  breadcrumbsItem: BreadcrumbsItem[];

  constructor(
    // private local: SessionStorageService,
    // public browserService: SystemInformationService
  ) {
    // this.local.set('LocalStorageService', { teste: 1 });
    this.breadcrumbsItem = [
      JonastorresRoutes.HOME.toBreadcrumb(),
      { label: 'acessibilidade' }
    ];
  }
}
