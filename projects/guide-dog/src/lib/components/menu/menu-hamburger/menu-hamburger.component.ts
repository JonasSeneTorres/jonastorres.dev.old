import { Component, HostListener, Injector, Input } from '@angular/core';
import { SystemInformationService } from 'projects/guide-dog/src/lib/services/system-information/system-information.service';
import { NavibarItemConfig } from 'projects/guide-dog/src/lib/types/navibar-item-config';

import { MasterBaseComponent } from '../../master-base/master-base.component';

@Component({
  selector: 'gd-menu-hamburger',
  templateUrl: './menu-hamburger.component.html',
  styleUrls: ['./menu-hamburger.component.scss'],
})
export class MenuHamburgerComponent extends MasterBaseComponent {
  @Input() nav: NavibarItemConfig[] = [];
  showHorizontalMenu = false;

  constructor(protected override injector: Injector, private systemInformation: SystemInformationService) {
    super(injector);
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
