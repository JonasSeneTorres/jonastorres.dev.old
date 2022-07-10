import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jt-box-outros-artigos',
  templateUrl: './box-outros-artigos.component.html',
  styleUrls: ['./box-outros-artigos.component.scss']
})
export class BoxOutrosArtigosComponent {
  _listaArtigoSerie: any[] = [];
  @Input() artigoAtual: string = '';
  desabilitarBotaoVoltar = false;
  desabilitarBotaoAvancar = false;

  get listaArtigoSerie(): any[] {
    return this._listaArtigoSerie;
  }

  @Input() set listaArtigoSerie(value: any[]) {
    this._listaArtigoSerie = value;

    const ultimoIndiceLista = this.artigoAtual.length - 1;
    const index = this.encontrarIndiceAtual();

    this.desabilitarBotaoVoltar = false;
    this.desabilitarBotaoAvancar = false;

    if (index === 0) {
      console.log('desabilitei')
      this.desabilitarBotaoVoltar = true;
      return;
    }

    if (index === ultimoIndiceLista) {
      this.desabilitarBotaoAvancar = true;
      return;
    }
  }

  constructor() { }

  private encontrarIndiceAtual() {
    return this.listaArtigoSerie.findIndex(
      item => {
        return item.titulo === this.artigoAtual;
      });
  }
}
