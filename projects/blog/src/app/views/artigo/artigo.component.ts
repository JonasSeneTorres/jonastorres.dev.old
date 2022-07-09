import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

import { ArtigosService } from './../../services/artigos/artigos.service';
import { CategoriasService } from '../../services/categorias/categorias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'jt-artigo',
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.scss'],
})
export class ArtigoComponent implements OnInit {
  dadosArtigo: any;
  categorias: any[] = [];
  ultimosArtigos: any[] = [];
  listaArquivoSerie: any[] = [];

  constructor(
    private router: Router,
    private artigosService: ArtigosService,
    private categoriasService: CategoriasService
  ) {
    console.log(this.router);
  }

  ngOnInit(): void {
    this.obterDadosIniciais(0).subscribe((sucesso) => {
      this.dadosArtigo = sucesso.artigo;
      this.categorias = sucesso.categorias;
      this.ultimosArtigos = sucesso.ultimosArtigos;

      this.obterDadosArtigoSerie().subscribe(
        sucessoArtigoSerie => {
          this.listaArquivoSerie = sucessoArtigoSerie;
          console.log('sucessoArtigoSerie: ', sucessoArtigoSerie);
        }
      );
    });
  }

  private obterDadosIniciais(idArtigo: number): Observable<any> {
    const obterArtigo = this.artigosService.obter(idArtigo);
    const obterCategorias = this.categoriasService.listar();
    const obterUltimosArtigos = this.artigosService.listarUltimosArtigos();

    return forkJoin({
      artigo: obterArtigo,
      categorias: obterCategorias,
      ultimosArtigos: obterUltimosArtigos,
    });
  }

  private obterDadosArtigoSerie() {
    const serieId = this.dadosArtigo.serieId;
    return this.artigosService.listarArtigosSerie(serieId);
  }

  // listarArtigosSerie

  // ngAfterViewInit() {
  //   console.log('jmsadklçdj')
  //   console.log(this.router.url);
  // }
}
