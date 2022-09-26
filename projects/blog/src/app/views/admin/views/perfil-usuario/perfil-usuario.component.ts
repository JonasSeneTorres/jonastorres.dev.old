import { Component, Injector, OnInit } from '@angular/core';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { Observable, takeUntil } from 'rxjs';

import { BaseAdminMasterComponent } from '../base-admin-master/base-admin-master.component';
import { PerfilUsuarioService } from './../../../../services/perfil-usuario/perfil-usuario.service';

@Component({
  selector: 'jt-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})
export class PerfilUsuarioComponent extends BaseAdminMasterComponent implements OnInit {
  constructor(
    protected override injector: Injector,
    private perfilUsuarioService: PerfilUsuarioService
    ) {
    super(injector);
    this.filtravelPelosCampos = ['titulo', 'categoriaId'];
    this.breadcrumbsItem = [
      JonastorresRoutes.HOME.toBreadcrumb(),
      JonastorresRoutes.ADMIN.toBreadcrumb(),
      { label: 'Perfil de usuario' },
    ];
    this.dados = [];
  }

  ngOnInit(): void {
    this.listarItens();
  }

  protected listarItens() {
    this.perfilUsuarioService.listar()
    .pipe(takeUntil(this._destroy$))
    .subscribe({
      next: (sucesso: any) => {
        console.log(sucesso)
        this.dados = sucesso;
      },
      error: () => {

      }
    });
  }

  protected confirmarExclusao(registro: any): Observable<any> {
    return this.perfilUsuarioService.apagar(registro.id);
  }
}
