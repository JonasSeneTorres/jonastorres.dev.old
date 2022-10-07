import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { AutoresService } from 'projects/blog/src/app/services/autores/autores.service';
import { Observable } from 'rxjs';

import { BaseAdminDetailComponent } from '../../base-admin-detail/base-admin-detail.component';

@Component({
  templateUrl: './autor-edicao.component.html',
  styleUrls: ['./autor-edicao.component.scss'],
})
export class AutorEdicaoComponent extends BaseAdminDetailComponent implements OnInit {
  constructor(protected override injector: Injector, private autoresService: AutoresService) {
    super(injector);
  }

  ngOnInit(): void {
    this.mapearParametrosDeRotas().subscribe(() => {
      this.breadcrumbsItem = [
        JonastorresRoutes.HOME.toBreadcrumb(),
        JonastorresRoutes.ADMIN.toBreadcrumb(),
        JonastorresRoutes.ADMIN_AUTOR.toBreadcrumb(),
      ];
      const breadcrumbNovo = JonastorresRoutes.ADMIN_AUTOR_NOVO.toBreadcrumb();
      const breadcrumbEditar = JonastorresRoutes.ADMIN_AUTOR_EDITAR.toBreadcrumb();

      this.ajustarBreadcrumb(this.id, breadcrumbNovo, breadcrumbEditar);
      this.criarForm();
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    const autor: any = {
      nome: this.form.get('nome')!.value,
      cargo: this.form.get('cargo')!.value,
      descricao: this.form.get('descricao')!.value,
      urlImagem: this.form.get('urlImagem')!.value,
      ativo: this.form.get('ativo')!.value,
    };

    this.gravarDados(autor, autor.nome, JonastorresRoutes.ADMIN_AUTOR.router as any);
  }

  protected gravarDadosInclusao(dados: any): Observable<any> {
    const newGuid: any = Guid.create();
    dados.id = newGuid.value;
    dados.dataCriacao = new Date();
    dados.dataEdicao = undefined;
    return this.autoresService.inserir(dados);
  }

  protected gravarDadosEdicao(dados: any): Observable<any> {
    dados.id = this.id;
    (dados.dataCriacao = this.form.get('dataCriacao')!.value), (dados.dataEdicao = new Date());
    return this.autoresService.atualizar(dados);
  }

  protected criarForm(): void {
    this.form = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl('', Validators.required),
      cargo: new FormControl(''),
      descricao: new FormControl('', Validators.required),
      urlImagem: new FormControl(''),
      ativo: new FormControl(true),
      dataCriacao: new FormControl(''),
      dataEdicao: new FormControl(''),
    });

    if (this.ehEdicao) {
      this.prepararFormEdicao();
    }
  }

  protected prepararFormEdicao(): void {
    this.autoresService.obter(this.id).subscribe((sucesso: any) => {
      this.form.patchValue({
        id: sucesso.id,
        nome: sucesso.nome,
        cargo: sucesso.cargo,
        descricao: sucesso.descricao,
        urlImagem: sucesso.urlImagem,
        ativo: sucesso.ativo,
        dataCriacao: sucesso.dataCriacao?.split('T')[0],
        dataEdicao: sucesso.dataEdicao?.split('T')[0],
      });
    });
  }
}
