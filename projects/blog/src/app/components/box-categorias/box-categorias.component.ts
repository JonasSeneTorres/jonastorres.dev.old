import { Component, Input } from '@angular/core';

@Component({
  selector: 'jt-box-categorias',
  templateUrl: './box-categorias.component.html',
  styleUrls: ['./box-categorias.component.scss']
})
export class BoxCategoriasComponent {
  @Input() categorias: any[] = [];
  @Input() categoriaSelecionada: string = '';

  constructor() { }
}
