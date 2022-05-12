import { Component, Input, OnInit } from '@angular/core';

import { NavibarItemConfig } from '../../types/navibar-item-config';

@Component({
  selector: 'gd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() horizontalNav: NavibarItemConfig[] = [];
  @Input() hamburgerNav: NavibarItemConfig[] = [];
  @Input() showAcessibilityBar = false;

  get showHorizontalNav(): boolean {
    return this.horizontalNav.length > 0;
  }

  get showHamburgerNav(): boolean {
    return this.hamburgerNav.length > 0;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
