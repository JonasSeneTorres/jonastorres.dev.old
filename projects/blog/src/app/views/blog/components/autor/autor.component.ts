import { Component, Injector, Input } from '@angular/core';
import { MasterBaseComponent } from 'projects/guide-dog/src/lib/components/master-base/master-base.component';

@Component({
  selector: 'jt-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.scss'],
})
export class AutorComponent extends MasterBaseComponent {
  @Input() autor: any;

  constructor(protected override injector: Injector) {
    super(injector);
  }
}
