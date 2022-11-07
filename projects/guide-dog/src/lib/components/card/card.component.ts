import { Component, Injector } from '@angular/core';

import { MasterBaseComponent } from '../master-base/master-base.component';

@Component({
  selector: 'gd-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent extends MasterBaseComponent {
  constructor(protected override injector: Injector) {
    super(injector);
  }
}
