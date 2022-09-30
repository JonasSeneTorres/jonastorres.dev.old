import { Component } from '@angular/core';

import { AutorEdicaoComponent } from '../../views/autor/autor-edicao/autor-edicao.component';

@Component({
  selector: 'jt-modal-autor',
  templateUrl: './modal-autor.component.html',
  styleUrls: ['./modal-autor.component.scss'],
})
export class ModalAutorComponent extends AutorEdicaoComponent {}
