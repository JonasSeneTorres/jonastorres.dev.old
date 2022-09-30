import { Component, Injector, OnInit } from '@angular/core';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { Observable } from 'rxjs';

import { BaseAdminMasterComponent } from '../base-admin-master/base-admin-master.component';
import { UsuariosService } from './../../../../services/usuarios/usuarios.service';

@Component({
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent
  extends BaseAdminMasterComponent
  implements OnInit
{
  constructor(
    protected override injector: Injector,
    private usuariosService: UsuariosService
  ) {
    super(injector);
    this.filtravelPelosCampos = ['titulo', 'categoriaId'];
    this.breadcrumbsItem = [
      JonastorresRoutes.HOME.toBreadcrumb(),
      JonastorresRoutes.ADMIN.toBreadcrumb(),
      { label: 'Usuários' },
    ];
  }

  ngOnInit(): void {
    this.listarItens();
  }

  protected listarItens() {
    this.usuariosService.listar().subscribe({
      next: sucesso => {
        this.dados = sucesso;
      },
      error: () => {},
    });
  }

  protected confirmarExclusao(registro: any): Observable<any> {
    return this.usuariosService.apagar(registro.id);
  }
}
