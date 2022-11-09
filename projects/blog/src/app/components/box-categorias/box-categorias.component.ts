import { Component, Injector, Input } from '@angular/core';
import { MasterBaseComponent } from 'projects/guide-dog/src/lib/components/master-base/master-base.component';

@Component({
  selector: 'jt-box-categorias',
  templateUrl: './box-categorias.component.html',
  styleUrls: ['./box-categorias.component.scss'],
})
export class BoxCategoriasComponent extends MasterBaseComponent {
  @Input() categorias: any[] = [];
  @Input() categoriaSelecionada: string = '';

  constructor(protected override injector: Injector) {
    super(injector);
  }
}
