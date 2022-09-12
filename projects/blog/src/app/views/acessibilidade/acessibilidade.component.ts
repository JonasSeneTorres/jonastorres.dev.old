import { Component, OnInit } from '@angular/core';

import { BreadcrumbsItem } from 'projects/guide-dog/src/lib/types/breadcrumbs-item.type';
import { JonastorresRoutes } from '../../enuns/jonastorres-routes.enum';
import { Router } from '@angular/router';
import { SessionStorageService } from 'projects/guide-dog/src/lib/services/data-storage/session-storage/session-storage.service';
import { SystemInformationService } from 'projects/guide-dog/src/lib/services/system-information/system-information.service';

@Component({
  selector: 'jt-acessibilidade',
  templateUrl: './acessibilidade.component.html',
  styleUrls: ['./acessibilidade.component.scss'],
})
export class AcessibilidadeComponent {
  breadcrumbsItem: BreadcrumbsItem[];

  constructor(
    private local: SessionStorageService,
    public browserService: SystemInformationService
  ) {
    this.local.set('LocalStorageService', { teste: 1 });
    this.breadcrumbsItem = [
      JonastorresRoutes.HOME.toBreadcrumb(),
      JonastorresRoutes.ADMIN.toBreadcrumb(),
      JonastorresRoutes.ADMIN_ARTIGOS.toBreadcrumb(),
    ];
  }
}
