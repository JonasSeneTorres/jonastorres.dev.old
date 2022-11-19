import { Component, Injector, Input } from '@angular/core';
import { MasterBaseComponent } from 'projects/guide-dog/src/lib/components/master-base/master-base.component';

@Component({
  selector: 'jt-box-artigo',
  templateUrl: './box-artigo.component.html',
  styleUrls: ['./box-artigo.component.scss'],
})
export class BoxArtigoComponent extends MasterBaseComponent {
  @Input() artigo: any = null;
  @Input() dadosCarregados = true;

  get icone(): string {
    let output = '';
    try {
      return this.artigo.url.split('/')[2];
    } catch (error) {
      return '';
    }
  }

  constructor(protected override injector: Injector) {
    super(injector);
  }
}
