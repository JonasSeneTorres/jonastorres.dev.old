import { Component, Injector, OnInit } from '@angular/core';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { CategoriasService } from 'projects/blog/src/app/services/categorias/categorias.service';
import { Observable, takeUntil } from 'rxjs';

import { BaseAdminMasterComponent } from '../base-admin-master/base-admin-master.component';

@Component({
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent extends BaseAdminMasterComponent implements OnInit{
  constructor(
    protected override injector: Injector,
    private categoriasService: CategoriasService
    ) {
    super(injector);
    this.filtravelPelosCampos = ['classificacao', 'categoriaId'];
    this.breadcrumbsItem = [
      JonastorresRoutes.HOME.toBreadcrumb(),
      JonastorresRoutes.ADMIN.toBreadcrumb(),
      { label: 'categoria' },
    ];
    // this.dados = [];
  }

  ngOnInit(): void {
    this.listarItens();
  }

  protected listarItens() {
    this.categoriasService.listar()
    .pipe(takeUntil(this._destroy$))
    .subscribe({
      next: (sucesso: any) => {
        this.dados = sucesso;
        // console.log(this.dados);
      },
      error: () => {

      }
    });
  }

  protected confirmarExclusao(registro: any): Observable<any> {
    return this.categoriasService.apagar(registro.id);
  }
}
