import { Component, HostListener, Input } from '@angular/core';

import { NavibarItemConfig } from 'projects/guide-dog/src/lib/types/navibar-item-config';
import { SystemInformationService } from 'projects/guide-dog/src/lib/services/system-information/system-information.service';

@Component({
  selector: 'gd-menu-hamburger',
  templateUrl: './menu-hamburger.component.html',
  styleUrls: ['./menu-hamburger.component.scss'],
})
export class MenuHamburgerComponent {
  @Input() nav: NavibarItemConfig[] = [];
  showHorizontalMenu = false;

  constructor(private systemInformation: SystemInformationService) {
    this.refreshData();
  }

  @HostListener('window:resize', ['$event'])
  refreshData() {
    this.showHorizontalMenu = !(
      this.systemInformation.browser.size.width <=
      this.systemInformation.page.centeredPanel.area - 2
    );
  }
}
