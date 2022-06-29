import { Component, HostListener, Input, OnInit } from '@angular/core';

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
  greatherThanLayoutBreak = false;
  // private centeredPanelMargin: number = 0;

  get centeredPanelMargin() {
    const sizeAdjustment = -2;
    return this.systemInformation.page.centeredPanel.margin + sizeAdjustment;
  }

  get showHamburgerNav(): boolean {
    const hasNavConfig = this.navConfig.length > 0;
    const centeredPanelMarginPositive = this.centeredPanelMargin > 0;
    const lessThanLayoutBreak =
      this.systemInformation.browser.size.width <=
      this.systemInformation.page.centeredPanel.area - 2;

      console.log(
        hasNavConfig, centeredPanelMarginPositive, lessThanLayoutBreak
      )

    return hasNavConfig && !centeredPanelMarginPositive && lessThanLayoutBreak;
    // return hasNavConfig  && lessThanLayoutBreak;
  }

  get showHamburgerHorizontalNav(): boolean {
    const hasNavConfig = this.navConfig.length > 0;
    const centeredPanelMarginPositive = this.centeredPanelMargin > 0;
    this.greatherThanLayoutBreak = this.systemInformation.page.size.ItsGreaterThanCenterPanel;




    return (
      hasNavConfig && (centeredPanelMarginPositive || this.greatherThanLayoutBreak)
    );
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    const hasNavConfig = this.navConfig.length > 0;
    const centeredPanelMarginPositive = this.centeredPanelMargin > 0;
    const lessThanLayoutBreak =
      this.systemInformation.browser.size.width <=
      this.systemInformation.page.centeredPanel.area - 2;

      console.log(
        hasNavConfig, centeredPanelMarginPositive, lessThanLayoutBreak
      )

  }

  constructor(private systemInformation: SystemInformationService) {
    // const sizeAdjustment = -2;
    // this.centeredPanelMargin = this.systemInformation.page.centeredPanel.margin + sizeAdjustment;
  }

}
