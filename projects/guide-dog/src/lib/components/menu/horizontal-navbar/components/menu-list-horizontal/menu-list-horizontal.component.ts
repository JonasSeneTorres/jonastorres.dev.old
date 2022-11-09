import { Component, Injector, Input } from '@angular/core';
import { NavibarItemConfig } from 'projects/guide-dog/src/lib/types/navibar-item-config';

import { MasterBaseComponent } from '../../../../master-base/master-base.component';

@Component({
  selector: 'gd-menu-list-horizontal',
  templateUrl: './menu-list-horizontal.component.html',
  styleUrls: ['./menu-list-horizontal.component.scss'],
})
export class MenuListHorizontalComponent extends MasterBaseComponent {
  @Input() navibarItemList: NavibarItemConfig[] = [];
  @Input() show = false;

  constructor(protected override injector: Injector) {
    super(injector);
  }
}
