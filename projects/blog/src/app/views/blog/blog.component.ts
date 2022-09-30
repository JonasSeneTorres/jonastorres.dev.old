import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, Observable, Subject, takeUntil } from 'rxjs';

import { BlogService } from '../../services/blog/blog.service';
import { ArtigosService } from './../../services/artigos/artigos.service';
import { CategoriasService } from './../../services/categorias/categorias.service';
import { JumbotronService } from './../../services/jumbotron/jumbotron.service';

@Component({
  selector: 'jt-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit, OnDestroy {
  categorias = [];
  ultimosArtigos = [];
  jumbotron = {};
  boxPrincipalTransparente: Observable<boolean>;
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _artigosService: ArtigosService,
    private _categoriasService: CategoriasService,
    private _blogService: BlogService,
    private _jumbotronService: JumbotronService,
    private _router: Router,
    private _changeDetectorRef: ChangeDetectorRef
  ) {
    this.boxPrincipalTransparente = this._blogService.boxPrincipalTransparente;
  }

  ngOnInit(): void {
    forkJoin({
      artigos: this._artigosService.listarUltimosArtigos(),
      categorias: this._categoriasService.listar(),
      jumbotron: this._jumbotronService.dadosJumbotrom$,
      buscar: this._artigosService.itensBuscados$,
    })
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: sucesso => {
          this.ultimosArtigos = sucesso.artigos;
          this.categorias = sucesso.categorias;
          this.escutarMudançasJumbotron(sucesso.jumbotron);
          this.escutarBusca(sucesso.buscar);
        },
        error: () => {},
      });

    this.boxPrincipalTransparente
      .pipe(takeUntil(this._destroy$))
      .subscribe(() => {
        this._changeDetectorRef.detectChanges();
        // setTimeout(() => {

        // }, 500);
      });
  }

  ngOnDestroy() {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }

  private escutarMudançasJumbotron(dados: Observable<any>) {
    dados.pipe(takeUntil(this._destroy$)).subscribe(data => {
      this.jumbotron = data;
    });
  }

  private escutarBusca(dados: Observable<any>) {
    dados.pipe(takeUntil(this._destroy$)).subscribe(data => {
      this._router.navigate([''], { queryParams: { por: data } });
    });
  }
}
