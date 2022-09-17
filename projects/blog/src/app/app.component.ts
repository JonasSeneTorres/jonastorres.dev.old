import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, filter, map, takeUntil } from 'rxjs';

import { CategoriasService } from './services/categorias/categorias.service';
import { NavibarConfig } from './config/navibar.config';
import { NavibarItemConfig } from 'projects/guide-dog/src/lib/types/navibar-item-config';

@Component({
  selector: 'jt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  menu: NavibarItemConfig[] = [];

  constructor(private categoriasService: CategoriasService) {}

  ngOnInit(): void {
    this.categoriasService
      .listar()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (sucesso) => {
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

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }

  private adicionarMenuComCategoria(
    sucesso: any,
    menuNovo: NavibarItemConfig[]
  ) {
    const itensMenuComCategoria = sucesso
      .filter((item: any) => this.filtrarMenu(item, true))
      .map((itemFiltrado: any) => this.mapearMenuComCategoria(itemFiltrado));

    this.adicionarItemCategoriaFiltrado(itensMenuComCategoria, menuNovo);
  }

  private adicionarMenuSemCategoria(
    sucesso: any,
    menuNovo: NavibarItemConfig[]
  ) {
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

  private adicionarItemCategoriaFiltrado(
    itensMenuComCategoria: any,
    menuNovo: NavibarItemConfig[]
  ) {
    for (const item of itensMenuComCategoria) {
      menuNovo.push(item);
    }
  }

  private filtrarMenu(item: any, filtrarComCategoria: boolean) {
    const estaAtivo = item.classificacao.ativo;
    const possuiCategorias = item.classificacao.categorias.length > 0;
    let tipoClassificacaoValido = this.obterTipoClassificacaoValido(item, filtrarComCategoria);

    const filtroValido =
      tipoClassificacaoValido && estaAtivo && possuiCategorias;

    if (filtroValido) {
      return item;
    }
  }

  private obterTipoClassificacaoValido(item: any, filtrarComCategoria: boolean) {
    const semCategoria = item.classificacao.url === 'categorias';
    const comCategoria = !semCategoria;
    let tipoClassificacaoValido = filtrarComCategoria
      ? comCategoria
      : semCategoria;
    return tipoClassificacaoValido;
  }

  private mapearMenuSemCategoria(
    itemFiltrado: any
  ): NavibarItemConfig | undefined {
    for (const item of itemFiltrado.classificacao.categorias) {
      const labelItem = item.label;
      const urlItem = `/blog/categorias/${item.url}`;

      if (item.ativo) {
        return { label: labelItem, route: [urlItem] };
      }
    }
    return;
  }

  private mapearMenuComCategoria(
    itemFiltrado: any
  ): NavibarItemConfig | undefined {
    // const valido = true;

    // if (valido) {
    const itemLabel = itemFiltrado.classificacao.label;
    const itemRoute = `/blog/${itemFiltrado.classificacao.url}`;
    let itemChildren: any[] = [];

    for (const categoria of itemFiltrado.classificacao.categorias) {
      const categoriaLabel = categoria.label;
      const categoriaRoute = `${itemRoute}/${categoria.url}`;

      const CategoriaValida = {
        label: categoriaLabel,
        route: [categoriaRoute],
      };

      if (categoria.ativo) {
        itemChildren.push(CategoriaValida);
      }
    }

    const itensValidos = {
      label: itemLabel,
      route: [itemRoute],
      children: itemChildren,
    };

    return itensValidos;
    // }

    // return;
  }
}
