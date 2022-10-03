import { Component } from '@angular/core';
import { JumbotronService } from 'projects/blog/src/app/services/jumbotron/jumbotron.service';
import { Observable } from 'rxjs';

import { Jumbotron } from './../../types/jumbotron.type';

@Component({
  selector: 'jt-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss'],
})
export class JumbotronComponent {
  dadosJumbotron$: Observable<Jumbotron>;

  // this._jumbotronService.inserirDados({
  //   titulo: '',
  //   subtitulo: '',
  //   categoria: '',
  //   compartilharBox: false,
  //   dataCriacao: undefined,
  //   dataEdicao: undefined,
  //   tempoLeitura: undefined,
  // });

  // @Input() titulo: string = '';
  // @Input() subtitulo: string = '';
  // @Input() dataCriacao?: Date;
  // @Input() dataEdicao?: Date;
  // @Input() tempoLeitura?: number;
  // @Input() compartilharBox = true;
  // private _categoria = '';

  // @Input() set categoria(value: string) {
  //   const inputValue = value ?? '';
  //   this._categoria = inputValue.toLocaleLowerCase();
  // }

  // get categoria(): string {
  //   return this._categoria;
  // }

  constructor(private jumbotronService: JumbotronService) {
    this.dadosJumbotron$ = this.jumbotronService.dadosJumbotron$;
  }
}
