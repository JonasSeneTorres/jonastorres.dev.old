import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { MasterBaseComponent } from 'projects/guide-dog/src/lib/components/master-base/master-base.component';
import { BreadcrumbsItem } from 'projects/guide-dog/src/lib/types/breadcrumbs-item.type';

@Component({
  selector: 'jt-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.scss'],
})
export class MenuAdminComponent extends MasterBaseComponent implements OnInit, OnDestroy {
  constructor(protected override injector: Injector) {
    super(injector);
  }
}
