import { Component, Injector } from '@angular/core';
import { MasterBaseComponent } from 'projects/guide-dog/src/lib/components/master-base/master-base.component';

@Component({
  selector: 'jt-box-compartilhe',
  templateUrl: './box-compartilhe.component.html',
  styleUrls: ['./box-compartilhe.component.scss'],
})
export class BoxCompartilheComponent extends MasterBaseComponent {
  constructor(protected override injector: Injector) {
    super(injector);
  }
}
