import { Component, Input, OnInit } from '@angular/core';

import { NavibarItemConfig } from 'projects/guide-dog/src/lib/types/navibar-item-config';

@Component({
  selector: 'gd-menu-hamburger',
  templateUrl: './menu-hamburger.component.html',
  styleUrls: ['./menu-hamburger.component.scss'],
})
export class MenuHamburgerComponent {
  @Input() nav: NavibarItemConfig[] = [];
}
