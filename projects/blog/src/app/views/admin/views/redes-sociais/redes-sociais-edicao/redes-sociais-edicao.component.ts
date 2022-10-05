import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { Observable } from 'rxjs';

import { BaseAdminDetailComponent } from '../../base-admin-detail/base-admin-detail.component';
import { RedesSociaisService } from './../../../../../services/redes-sociais/redes-sociais.service';

@Component({
  templateUrl: './redes-sociais-edicao.component.html',
  styleUrls: ['./redes-sociais-edicao.component.scss'],
})
export class RedesSociaisEdicaoComponent extends BaseAdminDetailComponent implements OnInit {
  constructor(protected override injector: Injector, private redesSociaisService: RedesSociaisService) {
    super(injector);
  }

  ngOnInit(): void {
    this.mapearParametrosDeRotas().subscribe(() => {
      this.breadcrumbsItem = [
        JonastorresRoutes.HOME.toBreadcrumb(),
        JonastorresRoutes.ADMIN.toBreadcrumb(),
        JonastorresRoutes.ADMIN_REDESSOCIAIS.toBreadcrumb(),
      ];
      const breadcrumbNovo = JonastorresRoutes.ADMIN_REDESSOCIAIS_NOVO.toBreadcrumb();
      const breadcrumbEditar = JonastorresRoutes.ADMIN_REDESSOCIAIS_EDITAR.toBreadcrumb();

      this.ajustarBreadcrumb(this.id, breadcrumbNovo, breadcrumbEditar);
      this.criarForm();
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    const redeSocial: any = {
      nome: this.form.get('nome')!.value,
      url: this.form.get('url')!.value,
      ativo: this.form.get('ativo')!.value,
    };

    this.gravarDados(redeSocial, redeSocial.nome, JonastorresRoutes.ADMIN_AUTOR.router as any);
  }

  protected gravarDadosInclusao(dados: any): Observable<any> {
    const newGuid: any = Guid.create();
    dados.id = newGuid.value;
    dados.dataCriacao = new Date();
    dados.dataEdicao = undefined;
    return this.redesSociaisService.inserir(dados);
  }

  protected gravarDadosEdicao(dados: any): Observable<any> {
    dados.id = this.id;
    (dados.dataCriacao = this._dataCriacao), (dados.dataEdicao = new Date());
    return this.redesSociaisService.atualizar(dados);
  }

  protected criarForm(): void {
    this.form = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl('', Validators.required),
      url: new FormControl(''),
      ativo: new FormControl(true),
      dataCriacao: new FormControl(''),
      dataEdicao: new FormControl(''),
    });

    if (this.ehEdicao) {
      this.prepararFormEdicao();
    }
  }

  protected prepararFormEdicao(): void {
    this.redesSociaisService.obter(this.id).subscribe((sucesso: any) => {
      this._dataCriacao = sucesso.dataCriacao;
      this.form.patchValue({
        id: sucesso.id,
        nome: sucesso.nome,
        url: sucesso.url,
        ativo: sucesso.ativo,
        dataCriacao: sucesso.dataCriacao?.split('T')[0],
        dataEdicao: sucesso.dataEdicao?.split('T')[0],
      });
    });
  }
}
