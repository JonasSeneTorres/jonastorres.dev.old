import { Component, Injector, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Guid } from 'guid-typescript';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { CategoriasService } from 'projects/blog/src/app/services/categorias/categorias.service';
import { Observable } from 'rxjs';

import { BaseAdminDetailComponent } from '../../base-admin-detail/base-admin-detail.component';

@Component({
  templateUrl: './categoria-edicao.component.html',
  styleUrls: ['./categoria-edicao.component.scss'],
})
export class CategoriaEdicaoComponent
  extends BaseAdminDetailComponent
  implements OnInit
{
  get categorias() {
    return this.form.controls['categorias'] as FormArray;
  }

  constructor(
    protected override injector: Injector,
    private categoriasService: CategoriasService,
    private formBuilder: FormBuilder
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.mapearParametrosDeRotas().subscribe(() => {
      this.breadcrumbsItem = [
        JonastorresRoutes.HOME.toBreadcrumb(),
        JonastorresRoutes.ADMIN.toBreadcrumb(),
        JonastorresRoutes.ADMIN_CATEGORIA.toBreadcrumb(),
      ];
      const breadcrumbNovo =
        JonastorresRoutes.ADMIN_CATEGORIA_NOVO.toBreadcrumb();
      const breadcrumbEditar =
        JonastorresRoutes.ADMIN_CATEGORIA_EDITAR.toBreadcrumb();

      this.ajustarBreadcrumb(this.id, breadcrumbNovo, breadcrumbEditar);
      this.criarForm();
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    const categoria = { ...this.form.value };
    categoria.dataCriacao = this._dataCriacao;
    categoria.categorias.forEach(
      (itemCategoria: any, indiceCategoria: number) => {
        itemCategoria.idCategoria = `${categoria.id}#${indiceCategoria + 1}`;
        itemCategoria.subcategorias.forEach(
          (itemSubategoria: any, indiceSubcategoria: number) => {
            itemSubategoria.idSubcategoria = `${categoria.id}#${
              indiceCategoria + 1
            }-${indiceSubcategoria + 1}`;
          }
        );
      }
    );

    // console.log(categoria);

    this.gravarDados(
      categoria,
      categoria.classificacao,
      JonastorresRoutes.ADMIN_CATEGORIA.router as any
    );
  }

  protected gravarDadosInclusao(dados: any): Observable<any> {
    const newGuid: any = Guid.create();
    dados.id = newGuid.value;
    dados.dataCriacao = new Date();
    dados.dataEdicao = undefined;
    return this.categoriasService.inserir(dados);
  }

  protected gravarDadosEdicao(dados: any): Observable<any> {
    dados.id = this.id;
    dados.dataEdicao = new Date();
    return this.categoriasService.atualizar(dados);
  }

  protected criarForm(): void {
    this.form = new FormGroup({
      id: new FormControl(''),
      ativo: new FormControl(true),
      classificacao: new FormControl(''),
      // idClassificacao: new FormControl(''),
      url: new FormControl(''),
      dataCriacao: new FormControl(''),
      dataEdicao: new FormControl(''),
      categorias: new FormArray([]),
    });

    if (this.ehEdicao) {
      this.prepararFormEdicao();
      return;
    }

    this.adicionarCategoria();
    this.adicionarSubcategoria(0);
    this.form.patchValue({
      categorias: [
        {
          subcategorias: [
            {
              labelSubcategoria: 'Fundamentos',
            },
          ],
        },
      ],
    });
  }

  protected prepararFormEdicao(): void {
    this.categoriasService.obter(this.id).subscribe((sucesso: any) => {
      console.log('xxxx', sucesso);
      this._dataCriacao = sucesso.dataCriacao;

      this.form.patchValue({
        id: sucesso.id,
        ativo: sucesso.ativo,
        classificacao: sucesso.classificacao,
        // idClassificacao: sucesso.idClassificacao,
        url: sucesso.url,
        dataCriacao: sucesso.dataCriacao?.split('T')[0],
        dataEdicao: sucesso.dataEdicao?.split('T')[0],
      });

      sucesso.categorias.forEach((categoria: any, indiceCategoria: number) => {
        this.adicionarCategoria();
        categoria.idCategoria = `${sucesso.id}#${indiceCategoria + 1}`;

        categoria.subcategorias.forEach(
          (subcategoria: any, indiceSubcategoria: number) => {
            this.adicionarSubcategoria(indiceCategoria);
            subcategoria.idSubcategoria = `${
              sucesso.id
            }#${(indiceCategoria = 1)}-${indiceSubcategoria + 1}`;
          }
        );

        // for (const _sub of categoria.subcategorias) {
        // }
      });

      const categoriasObtidas = sucesso.categorias;

      this.form.patchValue({
        categorias: categoriasObtidas,
      });
    });
  }

  adicionarCategoria(indice?: number) {
    const categoriaForm = this.formBuilder.group({
      idCategoria: [''],
      labelCategoria: ['', Validators.required],
      urlCategoria: ['', Validators.required],
      ativoCategoria: [true, Validators.required],
      subcategorias: this.formBuilder.array([]),
    });

    this.categorias.push(categoriaForm);

    if (indice) {
      this.adicionarSubcategoria(indice);
    }
  }

  removerCategoria(indice: number) {
    this.categorias.removeAt(indice);
  }

  adicionarSubcategoria(indice: number) {
    const subcategoriaForm = this.formBuilder.group({
      idSubcategoria: [''],
      labelSubcategoria: ['', Validators.required],
      ativoSubcategoria: [true, Validators.required],
    });

    this.getSubcategorias(indice).push(subcategoriaForm);
  }

  removerSubcategoria(indiceCategoria: number, indiceSubcategoria: number) {
    const control = this.getSubcategorias(indiceCategoria);
    control.removeAt(indiceSubcategoria);
  }

  getSubcategorias(indice: number): FormArray {
    return (this.categorias.controls[indice] as FormGroup).controls[
      'subcategorias'
    ] as FormArray;
  }
}
