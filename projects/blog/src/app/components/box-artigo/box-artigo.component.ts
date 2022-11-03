import { Component, Input } from '@angular/core';

@Component({
  selector: 'jt-box-artigo',
  templateUrl: './box-artigo.component.html',
  styleUrls: ['./box-artigo.component.scss'],
})
export class BoxArtigoComponent {
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

  constructor() {}
}
