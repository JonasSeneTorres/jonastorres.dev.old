import { Component, Injector, Input } from '@angular/core';

import { BreadcrumbsItem } from '../../types/breadcrumbs-item.type';
import { MasterBaseComponent } from '../master-base/master-base.component';

@Component({
  selector: 'gd-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent extends MasterBaseComponent {
  @Input() breadcrumbsItem: BreadcrumbsItem[] = [];

  constructor(protected override injector: Injector) {
    super(injector);
  }
}
