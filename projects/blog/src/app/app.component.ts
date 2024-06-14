import { DOCUMENT } from '@angular/common';
import { Component, Inject, Injector, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MasterBaseComponent } from 'projects/guide-dog/src/lib/components/master-base/master-base.component';
import { NavibarItemConfig } from 'projects/guide-dog/src/lib/types/navibar-item-config';
import { takeUntil } from 'rxjs';

import { CategoriasService } from './services/categorias/categorias.service';
import { ToastService } from './services/toast/toast.service';

@Component({
  selector: 'jt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends MasterBaseComponent implements OnInit, OnDestroy {
  menu: NavibarItemConfig[] = [];

  constructor(
    protected override injector: Injector,
    @Inject(DOCUMENT) private document: Document,
    private _messageService: MessageService,
    private _categoriasService: CategoriasService,
    private _toastService: ToastService
  ) {
    super(injector);
    this._toastService.itensBuscados$.subscribe((dados: any) => {
      this.exibirToast(dados.titulo, dados.mensagem, dados.icone);
    });
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this._categoriasService
      .listar()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: sucesso => {
          const menuNovo: NavibarItemConfig[] = [];
          this.adicionarMenuComCategoria(sucesso, menuNovo);
          this.adicionarMenuSemCategoria(sucesso, menuNovo);
          this.adicionarMenuSobre(menuNovo);
          this.adicionarMenuAutores(menuNovo);
          this.adicionarMenuContato(menuNovo);

          this.menu = menuNovo;
        },
        error: () => {},
      });
  }

  protected override observeStateAcessibility(): void {
    this._acessibilityService.stateAcessibility$.pipe(takeUntil(this._destroy$)).subscribe((stateAcessibility: any) => {
      this.zoom = stateAcessibility.zoom;
      this.theme = stateAcessibility.theme ?? 'ligth';
      // alert(`${this.theme}`);
      this.document.body.classList.remove('gd_theme_ligth', 'gd_theme_dark', 'gd_theme_contrast');
      this.document.body.classList.add(`gd_theme_${this.theme}`);
    });
    this.setTheme(this.theme as 'ligth' | 'dark' | 'contrast');
  }

  private adicionarMenuComCategoria(sucesso: any, menuNovo: NavibarItemConfig[]) {
    const itensMenuComCategoria = sucesso
      .filter((item: any) => this.filtrarMenu(item, true))
      .map((itemFiltrado: any) => this.mapearMenuComCategoria(itemFiltrado));

    this.adicionarItemCategoriaFiltrado(itensMenuComCategoria, menuNovo);
  }

  private adicionarMenuSemCategoria(sucesso: any, menuNovo: NavibarItemConfig[]) {
    const itensMenuSemCategoria = sucesso
      .filter((item: any) => this.filtrarMenu(item, false))
      .map((itemFiltrado: any) => this.mapearMenuSemCategoria(itemFiltrado));

    this.adicionarItemCategoriaFiltrado(itensMenuSemCategoria, menuNovo);
  }

  private adicionarMenuSobre(menuNovo: NavibarItemConfig[]) {
    menuNovo.push({
      label: 'Sobre',
      route: ['/sobre'],
    });
  }

  private adicionarMenuAutores(menuNovo: NavibarItemConfig[]) {
    menuNovo.push({
      label: 'Autores',
      route: ['/autores'],
    });
  }

  private adicionarMenuContato(menuNovo: NavibarItemConfig[]) {
    menuNovo.push({
      label: 'Contato',
      route: ['/contato'],
    });
  }

  private adicionarItemCategoriaFiltrado(itensMenuComCategoria: any, menuNovo: NavibarItemConfig[]) {
    for (const item of itensMenuComCategoria) {
      menuNovo.push(item);
    }
  }

  private filtrarMenu(item: any, filtrarComCategoria: boolean) {
    const estaAtivo = item.ativo;
    const possuiCategorias = item.categorias.length > 0;
    let tipoClassificacaoValido = this.obterTipoClassificacaoValido(item, filtrarComCategoria);

    const filtroValido = tipoClassificacaoValido && estaAtivo && possuiCategorias;

    if (filtroValido) {
      return item;
    }
  }

  private obterTipoClassificacaoValido(item: any, filtrarComCategoria: boolean) {
    const semCategoria = item.url === 'categorias';
    const comCategoria = !semCategoria;
    let tipoClassificacaoValido = filtrarComCategoria ? comCategoria : semCategoria;
    return tipoClassificacaoValido;
  }

  private mapearMenuSemCategoria(itemFiltrado: any): NavibarItemConfig | undefined {
    for (const item of itemFiltrado.categorias) {
      const labelItem = item.labelCategoria;
      const urlItem = `/blog/categorias/${item.urlCategoria}`;

      if (item.ativoCategoria) {
        return { label: labelItem, route: [urlItem] };
      }
    }
    return;
  }

  private mapearMenuComCategoria(itemFiltrado: any): NavibarItemConfig | undefined {
    const itemLabel = itemFiltrado.classificacao;
    const itemRoute = `/blog/${itemFiltrado.url}`;
    let itemChildren: any[] = [];

    for (const categoria of itemFiltrado.categorias) {
      const categoriaLabel = categoria.labelCategoria;
      const categoriaRoute = `${itemRoute}/${categoria.urlCategoria}`;

      const CategoriaValida = {
        label: categoriaLabel,
        route: [categoriaRoute],
      };

      if (categoria.ativoCategoria) {
        itemChildren.push(CategoriaValida);
      }
    }

    const itensValidos = {
      label: itemLabel,
      route: [itemRoute],
      children: itemChildren,
    };

    return itensValidos;
  }

  protected exclusaoMensagemSucesso(texto: string = '', edicao: boolean = false) {
    let severidade = 'success';
    let titulo = 'Sucesso';
    let detalhes = `${texto} foi ${edicao ? 'editado' : 'cadastrado'} com sucesso`;

    this._messageService.add({
      severity: severidade,
      summary: titulo,
      detail: detalhes,
    });
  }

  private exibirToast(titulo: string, mensagem: string, icone: string = 'success') {
    this._messageService.add({
      severity: icone,
      summary: titulo,
      detail: mensagem,
    });
  }
}
