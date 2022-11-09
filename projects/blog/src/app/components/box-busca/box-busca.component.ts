import { Component, Injector } from '@angular/core';
import { MasterBaseComponent } from 'projects/guide-dog/src/lib/components/master-base/master-base.component';

@Component({
  selector: 'jt-box-busca',
  templateUrl: './box-busca.component.html',
  styleUrls: ['./box-busca.component.scss'],
})
export class BoxBuscaComponent extends MasterBaseComponent {
  constructor(protected override injector: Injector) {
    super(injector);
  }
}
