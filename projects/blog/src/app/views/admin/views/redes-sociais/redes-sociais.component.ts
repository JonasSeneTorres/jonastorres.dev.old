import { Component, Injector, OnInit } from '@angular/core';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { Observable, takeUntil } from 'rxjs';

import { BaseAdminMasterComponent } from '../base-admin-master/base-admin-master.component';
import { RedesSociaisService } from './../../../../services/redes-sociais/redes-sociais.service';

@Component({
  templateUrl: './redes-sociais.component.html',
  styleUrls: ['./redes-sociais.component.scss']
})
export class RedesSociaisComponent extends BaseAdminMasterComponent implements OnInit {
  constructor(
    protected override injector: Injector,
    private redesSociaisService: RedesSociaisService
    ) {
    super(injector);
    this.filtravelPelosCampos = ['titulo', 'categoriaId'];
    this.breadcrumbsItem = [
      JonastorresRoutes.HOME.toBreadcrumb(),
      JonastorresRoutes.ADMIN.toBreadcrumb(),
      { label: 'Redes Sociais' },
    ];
  }

  ngOnInit(): void {
    this.listarItens();
  }

  protected listarItens() {
    this.redesSociaisService.listar()
    .pipe(takeUntil(this._destroy$))
    .subscribe({
      next: (sucesso) => {
        console.log(sucesso)
        this.dados = sucesso;
      },
      error: () => {

      }
    });
  }

  protected confirmarExclusao(registro: any): Observable<any> {
    return this.redesSociaisService.apagar(registro.id);
  }
}
