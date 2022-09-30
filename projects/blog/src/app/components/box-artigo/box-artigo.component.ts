import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jt-box-artigo',
  templateUrl: './box-artigo.component.html',
  styleUrls: ['./box-artigo.component.scss'],
})
export class BoxArtigoComponent {
  @Input() artigo: any = null;
  @Input() dadosCarregados = true;

  constructor() {}
}
