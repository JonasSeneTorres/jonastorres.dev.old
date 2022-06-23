import { Component, HostListener, Input, OnInit } from '@angular/core';

import { NavibarItemConfig } from 'projects/guide-dog/src/lib/types/navibar-item-config';
import { SystemInformationService } from '../../../services/system-information/system-information.service';

@Component({
  selector: 'gd-menu-hamburger',
  templateUrl: './menu-hamburger.component.html',
  styleUrls: ['./menu-hamburger.component.scss'],
})
export class MenuHamburgerComponent {
  @Input() nav: NavibarItemConfig[] = [];
  showHorizontalMenu = false;

  @HostListener('window:resize', ['$event'])
  refreshData() {
    // this.role= this.role === 'admin' ? 'guest' : 'admin';
    this.showHorizontalMenu = !this.systemInformation.page.size.ItsGreaterThanCenterPanel;
  }

  constructor(private systemInformation: SystemInformationService) {
    this.refreshData()
    // this.showHorizontalMenu = !this.systemInformation.page.size.ItsGreaterThanCenterPanel;
  }
}
