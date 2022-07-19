import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

import { ArtigosService } from '../../services/artigos/artigos.service';
import { CategoriasService } from '../../services/categorias/categorias.service';
import { SubcategoriasService } from './../../services/subcategorias/subcategorias.service';

// import { Router } from '@angular/router';

@Component({
  selector: 'jt-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent implements OnInit {
  dadosArtigo: any;
  categorias: any[] = [];
  subcategorias: any = [];
  ultimosArtigos: any[] = [];
  artigosDaCategoria: any[] = [];

  constructor(
    // private router: Router,
    private artigosService: ArtigosService,
    private categoriasService: CategoriasService,
    private subcategoriasService: SubcategoriasService
  ) {}

  ngOnInit(): void {
    this.obterDadosIniciais(1).subscribe((sucesso) => {
      this.dadosArtigo = sucesso.artigo;
      this.categorias = sucesso.categorias;
      this.ultimosArtigos = sucesso.ultimosArtigos;
      this.subcategorias = sucesso.subcategorias;
      this.artigosDaCategoria = this.montarArtigosDaCategoria(this.subcategorias, sucesso.artigosDaCategoria);
      // for (let indice = 0; indice < this.ultimosArtigos.length; indice++) {
      //   const element = this.ultimosArtigos[indice];

      // }

      console.log( this.artigosDaCategoria);
    },
    (erro: any) => {
      console.log(erro);
    });
  }

  private obterDadosIniciais(idCategoria: number): Observable<any> {
    const obterArtigo = this.categoriasService.obter(idCategoria);
    const obterCategorias = this.categoriasService.listar();
    const obterSubcategorias = this.subcategoriasService.listar();
    const obterUltimosArtigos = this.artigosService.listarUltimosArtigos();
    const obterArtigosDaCategoria = this.artigosService.listarArtigosCategoria(idCategoria);

    return forkJoin({
      artigo: obterArtigo,
      categorias: obterCategorias,
      subcategorias: obterSubcategorias,
      ultimosArtigos: obterUltimosArtigos,
      artigosDaCategoria: obterArtigosDaCategoria,
    });
  }

  private montarArtigosDaCategoria(subcategorias: any[], artigosDaCategoria: any[]) {
    let output = [];
    for (const item of subcategorias) {
      const subcategoriaItem = item.nome;
      const colecaoArtigos = artigosDaCategoria.filter(
        artigo => artigo.subCategoriaId === item.id
      )

      output.push({
        subcategoria: subcategoriaItem,
        artigos: colecaoArtigos
      });
    }

    console.log('output', output);

    return output;
  }
}
