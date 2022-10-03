import { Component } from '@angular/core';
import { JumbotronService } from 'projects/blog/src/app/services/jumbotron/jumbotron.service';

@Component({
  selector: 'jt-erro',
  templateUrl: './erro.component.html',
  styleUrls: ['./erro.component.scss'],
})
export class ErroComponent {
  constructor(private _jumbotronService: JumbotronService) {
    this._jumbotronService.inserirDados({
      titulo: '',
      subtitulo: '',
      categoria: '',
      compartilharBox: false,
      dataCriacao: undefined,
      dataEdicao: undefined,
      tempoLeitura: undefined,
    });
  }
}
