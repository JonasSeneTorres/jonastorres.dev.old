import { Component, Injector, Input } from '@angular/core';
import { NavibarItemConfig } from 'projects/guide-dog/src/lib/types/navibar-item-config';

import { MasterBaseComponent } from '../../master-base/master-base.component';

@Component({
  selector: 'gd-horizontal-navbar',
  templateUrl: './horizontal-navbar.component.html',
  styleUrls: ['./horizontal-navbar.component.scss'],
})
export class HorizontalNavbarComponent extends MasterBaseComponent {
  @Input() nav: NavibarItemConfig[] = [];

  constructor(protected override injector: Injector) {
    super(injector);
  }
}
