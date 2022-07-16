import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

import { ArtigosService } from '../../services/artigos/artigos.service';
import { CategoriasService } from '../../services/categorias/categorias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'jt-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent implements OnInit {
  dadosCategoria: any;
  categorias: any[] = [];
  ultimosArtigos: any[] = [];

  constructor(
    private router: Router,
    private artigosService: ArtigosService,
    private categoriasService: CategoriasService
  ) {}

  ngOnInit(): void {
    this.obterDadosIniciais(1).subscribe((sucesso) => {
      this.dadosCategoria = sucesso.artigo;
      this.categorias = sucesso.categorias;
      this.ultimosArtigos = sucesso.ultimosArtigos;
      console.log(sucesso);
    },
    (erro: any) => {
      console.log(erro);
    });
  }

  private obterDadosIniciais(idCategoria: number): Observable<any> {
    const obterArtigo = this.categoriasService.obter(idCategoria);
    const obterCategorias = this.categoriasService.listar();
    const obterUltimosArtigos = this.artigosService.listarUltimosArtigos();

    return forkJoin({
      artigo: obterArtigo,
      categorias: obterCategorias,
      ultimosArtigos: obterUltimosArtigos,
    });
  }
}
