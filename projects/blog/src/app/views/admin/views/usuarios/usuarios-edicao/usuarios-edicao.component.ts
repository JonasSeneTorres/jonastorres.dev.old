import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { PerfilUsuario } from 'projects/blog/src/app/enuns/perfil-usuario.enum';
import { Observable } from 'rxjs';

import { BaseAdminDetailComponent } from '../../base-admin-detail/base-admin-detail.component';
import { UsuariosService } from './../../../../../services/usuarios/usuarios.service';

@Component({
  templateUrl: './usuarios-edicao.component.html',
  styleUrls: ['./usuarios-edicao.component.scss'],
})
export class UsuariosEdicaoComponent extends BaseAdminDetailComponent implements OnInit {
  readonly perfilUsuario: any[] = [];

  constructor(protected override injector: Injector, private usuariosService: UsuariosService) {
    super(injector);
    const perfis = Object.values(PerfilUsuario).filter(key => isNaN(Number(key)));

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
    this.mapearParametrosDeRotas().subscribe(() => {
      this.breadcrumbsItem = [
        JonastorresRoutes.HOME.toBreadcrumb(),
        JonastorresRoutes.ADMIN.toBreadcrumb(),
        JonastorresRoutes.ADMIN_USUARIO.toBreadcrumb(),
      ];
      const breadcrumbNovo = JonastorresRoutes.ADMIN_USUARIO_NOVO.toBreadcrumb();
      const breadcrumbEditar = JonastorresRoutes.ADMIN_USUARIO_EDITAR.toBreadcrumb();

      this.ajustarBreadcrumb(this.id, breadcrumbNovo, breadcrumbEditar);
      this.criarForm();
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    const usuario: any = {
      id: this.form.get('id')!.value,
      nome: this.form.get('nome')!.value,
      email: this.form.get('email')!.value,
      perfilUsuarioId: this.form.get('perfilUsuarioId')!.value,
      quantidadeAdvertencia: this.form.get('quantidadeAdvertencia')!.value,
      suspensoAteData: this.form.get('suspensoAteData')!.value,
      observacao: this.form.get('observacao')!.value,
      ativo: this.form.get('ativo')!.value,
    };

    this.gravarDados(usuario, usuario.nome, JonastorresRoutes.ADMIN_AUTOR.router as any);
  }

  protected gravarDadosInclusao(dados: any): Observable<any> {
    const newGuid: any = Guid.create();
    dados.id = newGuid.value;
    dados.dataCriacao = new Date();
    dados.dataEdicao = undefined;
    return this.usuariosService.inserir(dados);
  }

  protected gravarDadosEdicao(dados: any): Observable<any> {
    dados.id = this.id;
    (dados.dataCriacao = this.form.get('dataCriacao')!.value), (dados.dataEdicao = new Date());
    return this.usuariosService.atualizar(dados);
  }

  protected criarForm(): void {
    this.form = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl('', Validators.required),
      email: new FormControl(''),
      senha: new FormControl('', Validators.required),
      confirmarSenha: new FormControl(''),
      perfilUsuarioId: new FormControl(''),
      quantidadeAdvertencia: new FormControl(''),
      suspensoAteData: new FormControl(''),
      observacao: new FormControl(''),
      ativo: new FormControl(true),
      dataCriacao: new FormControl(''),
      dataEdicao: new FormControl(''),
    });

    if (this.ehEdicao) {
      this.prepararFormEdicao();
    }
  }

  protected prepararFormEdicao(): void {
    this.usuariosService.obter(this.id).subscribe((sucesso: any) => {
      this.form.patchValue({
        id: sucesso.id,
        nome: sucesso.nome,
        email: sucesso.email,
        perfilUsuarioId: sucesso.perfilUsuarioId,
        quantidadeAdvertencia: sucesso.quantidadeAdvertencia,
        suspensoAteData: sucesso.suspensoAteData,
        observacao: sucesso.observacao,
        ativo: sucesso.ativo,
        dataCriacao: sucesso.dataCriacao?.split('T')[0],
        dataEdicao: sucesso.dataEdicao?.split('T')[0],
      });
    });
  }
}
