import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { CategoriasService } from 'projects/blog/src/app/services/categorias/categorias.service';
import { BreadcrumbsItem } from 'projects/guide-dog/src/lib/types/breadcrumbs-item.type';
import { Subject, takeUntil } from 'rxjs';

@Component({
  templateUrl: './categoria-edicao.component.html',
  styleUrls: ['./categoria-edicao.component.scss'],
})
export class CategoriaEdicaoComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  breadcrumbsItem: BreadcrumbsItem[];
  form!: FormGroup;
  id = '';
  ehEdicao = false;

  constructor(
    protected _route: ActivatedRoute,
    private categoriasService: CategoriasService,
    private router: Router
  ) {
    this.breadcrumbsItem = [
      JonastorresRoutes.HOME.toBreadcrumb(),
      JonastorresRoutes.ADMIN.toBreadcrumb(),
      JonastorresRoutes.ADMIN_CATEGORIA.toBreadcrumb(),
    ];
  }

  ngOnInit() {
    this._route.params.pipe(takeUntil(this._destroy$)).subscribe((params) => {
      this.id = params['id'] ?? '';
      this.ehEdicao = this.id.length > 0;

      const breadcrumbNovo = JonastorresRoutes.ADMIN_CATEGORIA_NOVO.toBreadcrumb();
      const breadcrumbEditar =
        JonastorresRoutes.ADMIN_CATEGORIA_EDITAR.toBreadcrumb();
      this.ajustarBreadcrumb(this.id, breadcrumbNovo, breadcrumbEditar);
      this.createForm();
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }

  private ajustarBreadcrumb(
    id: string,
    breadcrumbNovo: BreadcrumbsItem,
    breadcrumbEditar: BreadcrumbsItem
  ) {
    let complementoBreadcrumbs = breadcrumbNovo;
    if (id.length > 0) {
      complementoBreadcrumbs = breadcrumbEditar;
    }

    this.breadcrumbsItem.push(complementoBreadcrumbs);
  }

  private createForm() {
    this.form = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl('', Validators.required),
      cargo: new FormControl(''),
      descricao: new FormControl('', Validators.required),
      urlImagem: new FormControl(''),
      dataCriacao: new FormControl(''),
      dataEdicao: new FormControl(''),
    });

    if (this.ehEdicao) {
      this.prepararFormEdicao();
    }
  }

  private prepararFormEdicao() {
    this.categoriasService.obter(this.id).subscribe((sucesso: any) => {
      this.form.patchValue({
        id: sucesso.id,
        nome: sucesso.nome,
        cargo: sucesso.cargo,
        descricao: sucesso.descricao,
        urlImagem: sucesso.urlImagem,
        dataCriacao: sucesso.dataCriacao?.split('T')[0],
        dataEdicao: sucesso.dataEdicao?.split('T')[0],
      });
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    const autor: any = {
      nome: this.form.get('nome')!.value,
      cargo: this.form.get('cargo')!.value,
      descricao: this.form.get('descricao')!.value,
      urlImagem: this.form.get('urlImagem')!.value,
    };

    this.setarTipoOperacao(autor).subscribe({
      next: () => {
        this.router.navigate(JonastorresRoutes.ADMIN_AUTOR.router as any);
      },
      error: (error: Error) => {
        console.error(error);
      },
    });
  }

  private setarTipoOperacao(autor: any) {
    if (this.ehEdicao) {
      autor.id = this.id;
      autor.dataCriacao = this.form.get('dataCriacao')!.value,
      autor.dataEdicao = new Date();
      return this.categoriasService.atualizar(autor);
    }

    const newGuid: any = Guid.create();
    autor.id = newGuid.value;
    autor.dataCriacao = new Date();
    autor.dataEdicao = undefined;
    return this.categoriasService.inserir(autor);
  }
}
