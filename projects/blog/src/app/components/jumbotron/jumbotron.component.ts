import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jt-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent {
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';
  @Input() dataCriacao?: Date;
  @Input() dataEdicao?: Date;
  @Input() tempoLeitura?: number;
  @Input() compartilharBox = true;
  @Input() set categoria(value: string) {
    const inputValue = value ?? '';
    this._categoria = inputValue.toLocaleLowerCase();
  }

  get categoria(): string {
    return this._categoria;
  }

  _categoria = '';

  constructor() { }

  // ngOnInit(): void {
  // }

}
