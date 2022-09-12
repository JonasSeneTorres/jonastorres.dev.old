import { Component, Injector, Type, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

import { BreadcrumbsItem } from 'projects/guide-dog/src/lib/types/breadcrumbs-item.type';
import { Observable } from 'rxjs';
import { Table } from 'primeng/table';

@Component({ template: '' })
export abstract class BaseAdminMasterComponent {
  @ViewChild('dt') ngPrimeTable: Table | undefined;
  first = 0;
  rows = 10;
  dados: any[];
  filtravelPelosCampos: string[];
  breadcrumbsItem: BreadcrumbsItem[];
  private confirmationService: ConfirmationService;
  private messageService: MessageService;

  constructor(protected injector: Injector) {
    this.confirmationService = injector.get<ConfirmationService>(
      ConfirmationService as Type<ConfirmationService>
    );
    this.messageService = injector.get<MessageService>(
      MessageService as Type<MessageService>
    );
    this.dados = [];
    this.filtravelPelosCampos = [];
    this.breadcrumbsItem = [];
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
    this.ngPrimeTable?.filterGlobal(
      ($event.target as HTMLInputElement).value,
      stringVal
    );
  }

  excluir(registro: any, texto: string = '') {
    this.confirmationService.confirm({
      message: `Você deseja excluir o registro <strong>"${texto}"</strong>.
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
    this.confirmarExclusao(registro).subscribe({
      next: (_sucesso: any) => this.exclusaoMensagemSucesso(registro, texto),
      error: (_erro: any) => this.exclusaoMensagemFalha(registro, texto),
    });
  }

  protected abstract listarItens(): void;
  protected abstract confirmarExclusao(registro: any): Observable<any>;

  protected exclusaoMensagemSucesso(_registro: any, texto: string = '') {
    let severidade = 'success';
    let titulo = 'Sucesso';
    let detalhes = `O registro ${texto} foi excluido com sucesso`;

    this.messageService.add({
      severity: severidade,
      summary: titulo,
      detail: detalhes,
    });
    this.listarItens();
  }

  protected exclusaoMensagemFalha(
    _registro: any,
    texto: string = '',
    errorMessage: string = ''
  ) {
    let severidade = 'error';
    let titulo = 'Erro';
    let detalhes =
      errorMessage.length === 0
        ? `Ocorreu um erro ao tentar excluir o registro ${texto}.\nTente novamente`
        : errorMessage;

    this.messageService.add({
      severity: severidade,
      summary: titulo,
      detail: detalhes,
    });
  }
}
