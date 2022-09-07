import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

import { ArtigosService } from './../../services/artigos/artigos.service';
import { CategoriasService } from '../../services/categorias/categorias.service';

@Component({
  selector: 'jt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dadosArtigo: any;
  categorias: any[] = [];
  subcategorias: any = [];
  ultimosArtigos: any[] = [];
  artigosDaCategoria: any[] = [];

  constructor(
    private artigosService: ArtigosService,
    private categoriasService: CategoriasService
  ) {}

  ngOnInit(): void {
    this.obterDadosIniciais(1).subscribe(
      (sucesso) => {
        this.dadosArtigo = sucesso.artigo;
        this.ultimosArtigos = sucesso.ultimosArtigos;
        this.subcategorias = sucesso.subcategorias;
        this.artigosDaCategoria = this.montarArtigosDaCategoria(
          this.subcategorias,
          sucesso.artigosDaCategoria
        );
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }

  private obterDadosIniciais(idCategoria: number): Observable<any> {
    const obterArtigo = this.categoriasService.obter(idCategoria);
    const obterUltimosArtigos = this.artigosService.listarUltimosArtigos();
    const obterArtigosDaCategoria =
      this.artigosService.listarArtigosCategoria(idCategoria);

    return forkJoin({
      artigo: obterArtigo,
      ultimosArtigos: obterUltimosArtigos,
      artigosDaCategoria: obterArtigosDaCategoria,
    });
  }

  private montarArtigosDaCategoria(
    subcategorias: any[],
    artigosDaCategoria: any[]
  ) {
    let input = subcategorias ?? [];
    let output = [];
    for (const item of input) {
      const subcategoriaItem = item.nome;
      const colecaoArtigos = artigosDaCategoria.filter(
        (artigo) => artigo.subCategoriaId === item.id
      );

      output.push({
        subcategoria: subcategoriaItem,
        artigos: colecaoArtigos,
      });
    }

    return output;
  }
}
