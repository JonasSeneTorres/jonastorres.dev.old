import { Component, Input } from '@angular/core';

import { BreadcrumbsItem } from '../../types/breadcrumbs-item.type';

@Component({
  selector: 'gd-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  @Input() breadcrumbsItem: BreadcrumbsItem[] = [];

  constructor() {}
}
