import { Component, Injector } from '@angular/core';
import { MasterBaseComponent } from 'projects/guide-dog/src/lib/components/master-base/master-base.component';

@Component({
  selector: 'jt-siga-nos',
  templateUrl: './siga-nos.component.html',
  styleUrls: ['./siga-nos.component.scss'],
})
export class SigaNosComponent extends MasterBaseComponent {
  constructor(protected override injector: Injector) {
    super(injector);
  }
}
