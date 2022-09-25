import { Component, Injector, OnDestroy, Type } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { ToastService } from 'projects/blog/src/app/services/toast/toast.service';
import { BreadcrumbsItem } from 'projects/guide-dog/src/lib/types/breadcrumbs-item.type';
import { Observable, Subject, takeUntil, tap } from 'rxjs';

@Component({ template: '' })
export abstract class BaseAdminDetailComponent implements OnDestroy {
  protected _destroy$: Subject<boolean> = new Subject<boolean>();
  protected _confirmationService: ConfirmationService;
  protected _toastService: ToastService;
  protected _activatedRoute: ActivatedRoute;
  protected _router: Router;

  breadcrumbsItem: BreadcrumbsItem[] = [];
  form!: FormGroup;
  id = '';
  ehEdicao = false;

  constructor(protected injector: Injector) {
    this._confirmationService = injector.get<ConfirmationService>(
      ConfirmationService as Type<ConfirmationService>
    );
    this._toastService = injector.get<ToastService>(
      ToastService as Type<ToastService>
    );
    this._activatedRoute = injector.get<ActivatedRoute>(
      ActivatedRoute as Type<ActivatedRoute>
    );
    this._router = injector.get<Router>(Router as Type<Router>);
    this.breadcrumbsItem = [];
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }

  abstract submit(): void;

  protected gravarDados(dados: any, nomeRegistro: string, rotaAnterior: any[]) {
    this.definirApiDados(dados).subscribe({
      next: () => {
        this.ativarToast(nomeRegistro, this.ehEdicao);
        this._router.navigate(rotaAnterior);
      },
      error: (error: Error) => {
        console.error(error);
      },
    });
  }

  protected definirApiDados(dados: any) {
    if (this.ehEdicao) {
      return this.gravarDadosEdicao(dados);
    }

    return this.gravarDadosInclusao(dados);
  }

  protected abstract gravarDadosInclusao(dados: any): Observable<any>;

  protected abstract gravarDadosEdicao(dados: any): Observable<any>;

  protected mapearParametrosDeRotas(): Observable<any> {
    return this._activatedRoute.params.pipe(
      tap((parametros: any) => {
        this.id = parametros.id ?? '';
        this.ehEdicao = this.id.length > 0;
      }),
      takeUntil(this._destroy$)
    );
  }

  protected ajustarBreadcrumb(
    id: string,
    breadcrumbNovo: BreadcrumbsItem,
    breadcrumbEditar: BreadcrumbsItem
  ): void {
    let complementoBreadcrumbs = breadcrumbNovo;
    if (id.length > 0) {
      complementoBreadcrumbs = breadcrumbEditar;
    }

    this.breadcrumbsItem.push(complementoBreadcrumbs);
  }

  protected abstract criarForm(): void;

  protected abstract prepararFormEdicao(): void;

  protected ativarToast(texto: string = '', edicao: boolean = false) {
    let icone = 'success';
    let titulo = 'Sucesso';
    let mensagem = `"${texto}" foi ${
      edicao ? 'editado' : 'cadastrado'
    } com sucesso`;

    this._toastService.ativarToast(titulo, mensagem, icone);
  }
}
