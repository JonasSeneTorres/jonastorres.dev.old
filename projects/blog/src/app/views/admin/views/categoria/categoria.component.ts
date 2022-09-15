import { Component, Injector, OnInit } from '@angular/core';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { ArtigosService } from 'projects/blog/src/app/services/artigos/artigos.service';
import { Observable, takeUntil } from 'rxjs';
import { BaseAdminMasterComponent } from '../base-admin-master/base-admin-master.component';

@Component({
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent extends BaseAdminMasterComponent implements OnInit{
  constructor(
    protected override injector: Injector,
    private artigosService: ArtigosService
    ) {
    super(injector);
    this.filtravelPelosCampos = ['titulo', 'categoriaId'];
    this.breadcrumbsItem = [
      JonastorresRoutes.HOME.toBreadcrumb(),
      JonastorresRoutes.ADMIN.toBreadcrumb(),
      JonastorresRoutes.ADMIN_ARTIGOS.toBreadcrumb(),
    ];
  }

  ngOnInit(): void {
    this.listarItens();
  }

  protected listarItens() {
    this.artigosService.listar()
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
    return this.artigosService.apagar(registro.id);
  }
}
