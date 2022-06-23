import { Component, Input, OnInit } from '@angular/core';

import { NavibarItemConfig } from '../../types/navibar-item-config';
import { SystemInformationService } from 'projects/guide-dog/src/lib/services/system-information/system-information.service';

@Component({
  selector: 'gd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() navConfig: NavibarItemConfig[] = [];
  @Input() showAcessibilityBar = false;
  // private centeredPanelMargin: number = 0;

  get centeredPanelMargin() {
    const sizeAdjustment = -2;
    return this.systemInformation.page.centeredPanel.margin + sizeAdjustment;
  }

  get showHamburgerNav(): boolean {
    const hasNavConfig = this.navConfig.length > 0;
    const centeredPanelMarginPositive = this.centeredPanelMargin > 0;
    const lessThanLayoutBreak =
      this.systemInformation.page.size.width <=
      this.systemInformation.page.centeredPanel.area - 2;

    return hasNavConfig && !centeredPanelMarginPositive && lessThanLayoutBreak;
  }

  get showHamburgerHorizontalNav(): boolean {
    const hasNavConfig = this.navConfig.length > 0;
    const centeredPanelMarginPositive = this.centeredPanelMargin > 0;
    const greatherThanLayoutBreak = this.systemInformation.page.size.ItsGreaterThanCenterPanel;

    return (
      hasNavConfig && (centeredPanelMarginPositive || greatherThanLayoutBreak)
    );
  }

  constructor(private systemInformation: SystemInformationService) {
    // const sizeAdjustment = -2;
    // this.centeredPanelMargin = this.systemInformation.page.centeredPanel.margin + sizeAdjustment;
  }

}
