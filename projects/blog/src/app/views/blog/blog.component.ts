import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, forkJoin, takeUntil } from 'rxjs';

import { ArtigosService } from './../../services/artigos/artigos.service';
import { CategoriasService } from './../../services/categorias/categorias.service';
import { JumbotronService } from './../../services/jumbotron/jumbotron.service';
import { Router } from '@angular/router';

@Component({
  selector: 'jt-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit, OnDestroy {
  categorias = [];
  ultimosArtigos = [];
  jumbotron = {};
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private artigosService: ArtigosService,
    private categoriasService: CategoriasService,
    private jumbotronService: JumbotronService,
    private router: Router
  ) {}

  ngOnInit(): void {
    forkJoin({
      artigos: this.artigosService.listarUltimosArtigos(),
      categorias: this.categoriasService.listar(),
      jumbotron: this.jumbotronService.dadosJumbotrom$,
      buscar: this.artigosService.itensBuscados$,
    })
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (sucesso) => {
          this.ultimosArtigos = sucesso.artigos;
          this.categorias = sucesso.categorias;
          this.escutarMudançasJumbotron(sucesso.jumbotron);
          this.escutarBusca(sucesso.buscar);
        },
        error: () => {},
      });
  }

  ngOnDestroy() {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }

  private escutarMudançasJumbotron(dados: Observable<any>) {
    dados
    .pipe(takeUntil(this._destroy$))
    .subscribe((data) => {
      this.jumbotron = data;
    });
  }

  private escutarBusca(dados: Observable<any>) {
    dados
    .pipe(takeUntil(this._destroy$))
    .subscribe((data) => {
      this.router.navigate([''], { queryParams: { por: data }});
    });
  }
}
