import { Component, Injector, Input } from '@angular/core';
import { VitrineDados } from 'projects/blog/src/app/types/vitrine-dados.type';
import { MasterBaseComponent } from 'projects/guide-dog/src/lib/components/master-base/master-base.component';

@Component({
  selector: 'jt-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.scss'],
})
export class VitrineComponent extends MasterBaseComponent {
  @Input() dados: VitrineDados = {};

  get ultimosArtigos(): any[] {
    return this.dados.ultimosArtigos ?? [];
  }

  constructor(protected override injector: Injector) {
    super(injector);
  }
}
