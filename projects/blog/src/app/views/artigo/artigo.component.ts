import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

import { ArtigosService } from './../../services/artigos/artigos.service';
import { AutoresService } from '../../services/autores/autores.service';
import { BreadcrumbsItem } from 'projects/guide-dog/src/lib/types/breadcrumbs-item.type';
import { CategoriasService } from '../../services/categorias/categorias.service';
import { JonastorresRoutes } from '../../enuns/jonastorres-routes.enum';

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
  dadosAutor: any;
  categoriaArtigo: string = '';
  breadcrumbsItem: BreadcrumbsItem[];

  constructor(
    private artigosService: ArtigosService,
    private categoriasService: CategoriasService,
    private autoresService: AutoresService
  ) {
    this.breadcrumbsItem = [
      JonastorresRoutes.HOME.toBreadcrumb(),
      JonastorresRoutes.ADMIN.toBreadcrumb(),
      JonastorresRoutes.ADMIN_ARTIGOS.toBreadcrumb(),
    ];
  }

  ngOnInit(): void {
    this.obterDadosIniciais(0).subscribe((sucesso) => {
      this.dadosArtigo = sucesso.artigo;
      this.categorias = sucesso.categorias ?? [];
      this.ultimosArtigos = sucesso.ultimosArtigos ?? [];

      const nomeArtigo = this.categorias.filter( item => item.id === this.dadosArtigo.categoriaId)[0].nome;
      this.categoriaArtigo = (nomeArtigo ?? '').toLowerCase();

      this.obterDadosArtigoSerie().subscribe(
        sucessoArtigoSerie => {
          this.listaArquivoSerie = sucessoArtigoSerie;
        }
      );

      this.obterDadosAutor().subscribe(
        (sucesso: any) => {
          this.dadosAutor = sucesso;
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

  private obterDadosAutor() {
    const autorId = this.dadosArtigo.autorId;
    return this.autoresService.obter(autorId);
  }
}
