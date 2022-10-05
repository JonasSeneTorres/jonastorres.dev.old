import { Component, Injector, OnInit } from '@angular/core';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { PerfilUsuario } from 'projects/blog/src/app/enuns/perfil-usuario.enum';
import { Observable } from 'rxjs';

import { BaseAdminMasterComponent } from '../base-admin-master/base-admin-master.component';
import { UsuariosService } from './../../../../services/usuarios/usuarios.service';

@Component({
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent extends BaseAdminMasterComponent implements OnInit {
  // perfilUsuario = PerfilUsuario;
  perfilUsuario: any[] = [];
  constructor(protected override injector: Injector, private usuariosService: UsuariosService) {
    super(injector);
    this.filtravelPelosCampos = ['titulo', 'categoriaId'];
    this.breadcrumbsItem = [
      JonastorresRoutes.HOME.toBreadcrumb(),
      JonastorresRoutes.ADMIN.toBreadcrumb(),
      { label: 'Usuários' },
    ];

    const perfis = Object.values(PerfilUsuario).filter(key => isNaN(Number(key)));

    // console.log(
    //   Object.values(PerfilUsuario).filter(key => isNaN(Number(key))),
    //   Object.keys(PerfilUsuario).map((key: any) => PerfilUsuario[key])
    // );
    for (let perfil in perfis) {
      this.perfilUsuario.push({
        key: `${PerfilUsuario[perfil].toUpperCase().charAt(0)}${PerfilUsuario[perfil]
          .toLowerCase()
          .substring(1, PerfilUsuario[perfil].toLowerCase().length)}`,
        value: perfil,
      });
    }
  }

  ngOnInit(): void {
    this.listarItens();
  }

  obterNomePerfil(valor: number): string {
    return this.perfilUsuario.filter((x: any) => x.value === valor)[0].key;
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
