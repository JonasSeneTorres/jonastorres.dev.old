import { Component, Input } from '@angular/core';

import { NavibarItemConfig } from 'projects/guide-dog/src/lib/types/navibar-item-config';

@Component({
  selector: 'gd-menu-list-horizontal',
  templateUrl: './menu-list-horizontal.component.html',
  styleUrls: ['./menu-list-horizontal.component.scss']
})
export class MenuListHorizontalComponent {
  // private _navibarItemList: NavibarItemConfig[] = [];
  @Input() navibarItemList: NavibarItemConfig[] = [];
  @Input() show = false

  constructor() { }
}
