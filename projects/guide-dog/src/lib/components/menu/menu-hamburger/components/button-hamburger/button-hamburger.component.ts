import { Component, Injector, Input } from '@angular/core';

import { MasterBaseComponent } from '../../../../master-base/master-base.component';

@Component({
  selector: 'gd-button-hamburger',
  templateUrl: './button-hamburger.component.html',
  styleUrls: ['./button-hamburger.component.scss'],
})
export class ButtonHamburgerComponent extends MasterBaseComponent {
  @Input() actived = false;

  constructor(protected override injector: Injector) {
    super(injector);
  }

  changeIcon() {
    this.actived = !this.actived;
  }
}
