import { Component, Injector, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  // get subcategorias() {
  //   return this.form.controls["subcategorias"] as FormArray;
  // }

  // get a() {
  //   return this.categorias.controls;
  // }

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

    const a = {
      id: this.form.value.id,
      dataCriacao: this.form.value.dataCriacao,
      dataEdicao: this.form.value.dataEdicao,
      classificacao: {
        id: this.form.value.idClassificacao,
        label: this.form.value.classificacao,
        url: this.form.value.url,
        ativo: this.form.value.ativo,
        categorias: [
          {
            idCategoria: '1-1',
            labelCategoria: 'Arquitetura',
            urlCategoria: 'arquitetura',
            ativoCategoria: true,
            subcategorias: [
              {
                idSubcategoria: '1-1-1',
                labelSubcategoria: 'Fundamentos',
                ativoSubcategoria: true,
              },
            ],
          },
        ],
      },
    };
    console.log('preenchido: ', this.form.value);

    // const categorias: any = {
    //   nome: this.form.get('nome')!.value,
    //   cargo: this.form.get('cargo')!.value,
    //   descricao: this.form.get('descricao')!.value,
    //   urlImagem: this.form.get('urlImagem')!.value,
    // };

    // this.gravarDados(autor, autor.nome, JonastorresRoutes.ADMIN_AUTOR.router as any);
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
    (dados.dataCriacao = this.form.get('dataCriacao')!.value),
      (dados.dataEdicao = new Date());
    return this.categoriasService.atualizar(dados);
  }

  protected criarForm(): void {
    this.form = new FormGroup({
      id: new FormControl(''),
      ativo: new FormControl(''),
      classificacao: new FormControl(''),
      idClassificacao: new FormControl(''),
      url: new FormControl(''),
      dataCriacao: new FormControl(''),
      dataEdicao: new FormControl(''),
      categorias: new FormArray([]),
    });

    if (this.ehEdicao) {
      this.prepararFormEdicao();
    }
  }

  protected prepararFormEdicao(): void {
    this.categoriasService.obter(this.id).subscribe((sucesso: any) => {
      console.log('xxxx', sucesso);

      this.form.patchValue({
        id: sucesso.id,
        ativo: sucesso.classificacao.ativo,
        classificacao: sucesso.classificacao.label,
        idClassificacao: sucesso.classificacao.id,
        url: sucesso.classificacao.url,
        dataCriacao: sucesso.dataCriacao?.split('T')[0],
        dataEdicao: sucesso.dataEdicao?.split('T')[0],
      });

      sucesso.classificacao.categorias.forEach(
        (categoria: any, indiceCategoria: number) => {
          this.adicionarCategoria();
          // this.categorias.form

          for (const _sub of categoria.subcategorias) {
            this.adicionarSubcategoria(indiceCategoria);
          }

          // categoria.subcategorias.forEach((_value: any, indiceSubcategoria: number) => {
          //   this.adicionarSubcategoria(indiceCategoria);
          // });
        }
      );

      const categoriasObtidas = sucesso.classificacao.categorias;

      // const categoriasObtidas = sucesso.classificacao.categorias.map(
      //   (item: any) => {
      //     const output = item;
      //     return output;
      //   }
      // );

      console.log(categoriasObtidas);

      this.form.patchValue({
        // classificacao: {
        categorias: categoriasObtidas,
        // }
      });

      // for (const categoria of sucesso.classificacao.categorias) {
      //   this.adicionarCategoria();
      //   // console.log(categoria);
      // }
    });
  }

  adicionarCategoria() {
    const categoriaForm = this.formBuilder.group({
      idCategoria: [''],
      labelCategoria: ['', Validators.required],
      urlCategoria: ['', Validators.required],
      ativoCategoria: [true, Validators.required],
      subcategorias: this.formBuilder.array([]),
    });

    this.categorias.push(categoriaForm);
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
    // console.log('add sub', indice, (this.form))
    // const a = this.form.controls['categorias'] as FormArray;
    // console.log(a.controls[0]);
    // const b = (this.form.controls['categorias'] as FormArray).controls[0];
    // console.log((b as FormGroup).controls['subcategorias']);

    const c = this.getSubcategorias(indice);
    // console.log(c);

    c.push(subcategoriaForm);
    // const subcategoriaForm = this.formBuilder.group({
    //   label: ['', Validators.required],
    //   // url: ['', Validators.required],
    //   // ativo: ['', Validators.required]
    // });
    // (this.categorias.controls.at(indice).get('subcategoria') as FormArray).push(subcategoriaForm);
    //   this.form.value.categorias[0].subcategorias.push(subcategoriaForm);

    // //   const control = (this.form.get('categorias') as FormArray).controls[indice].get('subcategorias');
    // //  // console.log(control);
    // //   (control as FormArray).push(subcategoriaForm);
    //   // this.categorias[indice].subcategorias.push(subcategoriaForm);
    //   const categorias = this.form.controls["categorias"] as FormArray;
    //   categorias.insert(categorias.length, subcategoriaForm);
  }

  removerSubcategoria(indiceCategoria: number, indiceSubcategoria: number) {
    const control = this.getSubcategorias(indiceCategoria);
    control.removeAt(indiceSubcategoria);
  }

  // getSubcategorias(indice: number): FormArray {
  //   return this.form.controls["categorias"][indice].subcategorias as FormArray;
  // }

  getSubcategorias(indice: number): FormArray {
    return (this.categorias.controls[indice] as FormGroup).controls[
      'subcategorias'
    ] as FormArray;
  }
}
