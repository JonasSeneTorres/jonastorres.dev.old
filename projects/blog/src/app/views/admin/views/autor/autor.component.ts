import { Component, Injector, OnInit, OnDestroy } from '@angular/core';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { ArtigosService } from 'projects/blog/src/app/services/artigos/artigos.service';
import { AutoresService } from 'projects/blog/src/app/services/autores/autores.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { BaseAdminMasterComponent } from '../base-admin-master/base-admin-master.component';

@Component({
  selector: 'jt-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.scss'],
})
export class AutorComponent
  extends BaseAdminMasterComponent
  implements OnInit, OnDestroy
{
  constructor(
    protected override injector: Injector,
    private autoresService: AutoresService
  ) {
    super(injector);
    this.filtravelPelosCampos = ['nome'];
    this.breadcrumbsItem = [
      JonastorresRoutes.HOME.toBreadcrumb(),
      JonastorresRoutes.ADMIN.toBreadcrumb(),
      { label: 'Autor' },
    ];
  }

  ngOnInit(): void {
    this.listarItens();
  }

  protected listarItens() {
    this.autoresService
      .listar()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (sucesso: any) => {
          this.dados = sucesso;
          console.log(this.dados);
        },
        error: () => {},
      });
  }

  protected confirmarExclusao(registro: any): Observable<any> {
    return this.autoresService.apagar(registro.id);
  }
}
