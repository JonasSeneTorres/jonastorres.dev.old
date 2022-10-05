import { Component, Injector, OnInit } from '@angular/core';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { ArtigosService } from 'projects/blog/src/app/services/artigos/artigos.service';
import { forkJoin, Observable, takeUntil } from 'rxjs';

import { BaseAdminMasterComponent } from '../base-admin-master/base-admin-master.component';
import { CategoriasService } from './../../../../services/categorias/categorias.service';

@Component({
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.scss'],
})
export class ArtigoComponent extends BaseAdminMasterComponent implements OnInit {
  categoria: any[] = [];

  constructor(
    protected override injector: Injector,
    private artigosService: ArtigosService,
    private categoriasService: CategoriasService
  ) {
    super(injector);
    this.filtravelPelosCampos = ['titulo', 'categoriaId'];
    this.breadcrumbsItem = [
      JonastorresRoutes.HOME.toBreadcrumb(),
      JonastorresRoutes.ADMIN.toBreadcrumb(),
      { label: 'Artigo' },
    ];
  }

  ngOnInit(): void {
    this.listarItens();
  }

  obterNomeCategoria(dados: any): string {
    const categoriaItem = this.categoria.filter((x: any) => x.id === dados.classificacaoId)[0];

    const classificacao = categoriaItem.classificacao === 'Sem categorias' ? '' : `${categoriaItem.classificacao} / `;
    const categoria = categoriaItem.categorias.filter((y: any) => y.idCategoria === dados.subcategoriaId.split('-')[0])[0]
      .labelCategoria;

    return `${classificacao}${categoria}`;
  }

  protected listarItens() {
    this.obterDadosAPI()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (sucesso: any) => {
          (this.dados = sucesso.autores), (this.categoria = sucesso.categorias);
        },
        error: () => {},
      });
  }

  protected confirmarExclusao(registro: any): Observable<any> {
    return this.artigosService.apagar(registro.id);
  }

  private obterDadosAPI(): Observable<any> {
    const obterArtigos = this.artigosService.listar();
    const obterCategorias = this.categoriasService.listar();

    return forkJoin({
      autores: obterArtigos,
      categorias: obterCategorias,
    });
  }
}
