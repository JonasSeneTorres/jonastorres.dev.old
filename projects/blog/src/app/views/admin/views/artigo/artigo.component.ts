import { Component, Injector, OnInit, OnDestroy } from '@angular/core';

import { BaseAdminMasterComponent } from '../base-admin-master/base-admin-master.component';
import { Observable, of, Subject, takeUntil } from 'rxjs';
import { ArtigosService } from 'projects/blog/src/app/services/artigos/artigos.service';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';

@Component({
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.scss'],
})
export class ArtigoComponent extends BaseAdminMasterComponent implements OnInit {


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
