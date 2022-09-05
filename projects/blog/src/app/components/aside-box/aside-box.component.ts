import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

import { ArtigosService } from '../../services/artigos/artigos.service';
import { CategoriasService } from '../../services/categorias/categorias.service';

@Component({
  selector: 'jt-aside-box',
  templateUrl: './aside-box.component.html',
  styleUrls: ['./aside-box.component.scss']
})
export class AsideBoxComponent
implements OnInit
{
  categorias: any[] = [];
  ultimosArtigos: any[] = [];

  constructor(
    private categoriasService: CategoriasService,
    private artigosService: ArtigosService,
    ) {

    }

    ngOnInit(): void {
      this.obterDadosIniciais(1).subscribe((sucesso) => {
        // this.dadosArtigo = sucesso.artigo;
        this.categorias = sucesso.categorias;
        this.ultimosArtigos = sucesso.ultimosArtigos;
        // this.subcategorias = sucesso.subcategorias;
        // this.artigosDaCategoria = this.montarArtigosDaCategoria(this.subcategorias, sucesso.artigosDaCategoria);
      },
      (erro: any) => {
        console.error(erro);
      });
    }

    private obterDadosIniciais(idCategoria: number): Observable<any> {
      // const obterArtigo = this.categoriasService.obter(idCategoria);
      const obterCategorias = this.categoriasService.listar();
      // const obterSubcategorias = this.subcategoriasService.listar();
      const obterUltimosArtigos = this.artigosService.listarUltimosArtigos();
      // const obterArtigosDaCategoria = this.artigosService.listarArtigosCategoria(idCategoria);

      return forkJoin({
        // artigo: obterArtigo,
        categorias: obterCategorias,
        // subcategorias: obterSubcategorias,
        ultimosArtigos: obterUltimosArtigos,
        // artigosDaCategoria: obterArtigosDaCategoria,
      });
    }

  // ngOnInit(): void {
  //   this.categoriasService.listar().subscribe(
  //     (sucesso) => {
  //       this.categorias = sucesso;
  //     }
  //   );
  // }
}
