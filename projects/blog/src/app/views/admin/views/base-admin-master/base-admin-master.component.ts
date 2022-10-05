import { Component, Injector, OnDestroy, Type, ViewChild } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ToastService } from 'projects/blog/src/app/services/toast/toast.service';
import { BreadcrumbsItem } from 'projects/guide-dog/src/lib/types/breadcrumbs-item.type';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({ template: '' })
export abstract class BaseAdminMasterComponent implements OnDestroy {
  protected _destroy$: Subject<boolean> = new Subject<boolean>();

  @ViewChild('dt') ngPrimeTable: Table | undefined;
  first = 0;
  rows = 10;
  dados: any[] = [];
  filtravelPelosCampos: string[];
  breadcrumbsItem: BreadcrumbsItem[];
  protected confirmationService: ConfirmationService;
  protected _toastService: ToastService;

  constructor(protected injector: Injector) {
    this.confirmationService = injector.get<ConfirmationService>(ConfirmationService as Type<ConfirmationService>);
    this._toastService = injector.get<ToastService>(ToastService as Type<ToastService>);
    this.filtravelPelosCampos = [];
    this.breadcrumbsItem = [];
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.dados ? this.first === this.dados.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.dados ? this.first === 0 : true;
  }

  applyFilterGlobal($event: any, stringVal: string) {
    this.ngPrimeTable?.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  excluir(registro: any, texto: string = '') {
    this.confirmationService.confirm({
      message: `Você deseja excluir <strong>"${texto}"</strong>.
      <br aria-hidden='true'><br aria-hidden='true'>
      <strong>Essa ação é definitiva e não pode ser revertida.</strong>
      <br aria-hidden='true'><br aria-hidden='true'>
      Deseja prosseguir?`,
      accept: () => {
        this.processarExclusao(registro, texto);
      },
    });
  }

  private processarExclusao(registro: any, texto: string) {
    try {
      this.observarResultadoExclusao(registro, texto);
    } catch (error: any) {
      this.exclusaoMensagemFalha(registro, texto, error.message);
    }
  }

  private observarResultadoExclusao(registro: any, texto: string) {
    this.confirmarExclusao(registro)
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (_sucesso: any) => this.exclusaoMensagemSucesso(registro, texto),
        error: (_erro: any) => this.exclusaoMensagemFalha(registro, texto),
      });
  }

  protected abstract listarItens(): void;
  protected abstract confirmarExclusao(registro: any): Observable<any>;

  protected exclusaoMensagemSucesso(_registro: any, texto: string = '') {
    let icone = 'success';
    let titulo = 'Sucesso';
    let mensagem = `"${texto}" foi excluido com sucesso`;

    this.ativarToast(titulo, mensagem, icone);
    this.listarItens();
  }

  protected exclusaoMensagemFalha(_registro: any, texto: string = '', errorMessage: string = '') {
    let icone = 'error';
    let titulo = 'Erro';
    let mensagem =
      errorMessage.length === 0 ? `Ocorreu um erro ao tentar excluir o registro "${texto}".\nTente novamente` : errorMessage;

    this.ativarToast(titulo, mensagem, icone);
  }

  protected ativarToast(titulo: string, mensagem: string, icone: string) {
    this._toastService.ativarToast(titulo, mensagem, icone);
  }
}
