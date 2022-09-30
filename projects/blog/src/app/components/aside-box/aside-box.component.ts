import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, forkJoin, takeUntil } from 'rxjs';

import { ArtigosService } from '../../services/artigos/artigos.service';
import { CategoriasService } from '../../services/categorias/categorias.service';

@Component({
  selector: 'jt-aside-box',
  templateUrl: './aside-box.component.html',
  styleUrls: ['./aside-box.component.scss'],
})
export class AsideBoxComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  categorias: any[] = [];
  ultimosArtigos: any[] = [];

  constructor(
    private categoriasService: CategoriasService,
    private artigosService: ArtigosService
  ) {}

  ngOnInit(): void {
    this.obterDadosIniciais(1)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        sucesso => {
          this.categorias = sucesso.categorias;
          this.ultimosArtigos = sucesso.ultimosArtigos;
        },
        (erro: any) => {
          console.error(erro);
        }
      );
  }

  private obterDadosIniciais(idCategoria: number): Observable<any> {
    const obterCategorias = this.categoriasService.listar();
    const obterUltimosArtigos = this.artigosService.listarUltimosArtigos();

    return forkJoin({
      categorias: obterCategorias,
      ultimosArtigos: obterUltimosArtigos,
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }
}
