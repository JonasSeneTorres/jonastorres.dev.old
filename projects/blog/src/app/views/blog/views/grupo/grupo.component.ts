import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { ArtigosService } from 'projects/blog/src/app/services/artigos/artigos.service';
import { JumbotronService } from 'projects/blog/src/app/services/jumbotron/jumbotron.service';
import { VitrineDados } from 'projects/blog/src/app/types/vitrine-dados.type';

@Component({
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.scss']
})
export class GrupoComponent implements OnInit, OnDestroy {
  vitrineDados: VitrineDados = {};
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _artigosService: ArtigosService,
    private _jumbotronService: JumbotronService,
    private _activatedRoute: ActivatedRoute
    ) {
      this._jumbotronService.dadosJumbotrom$ = null;
    }

  ngOnInit(): void {
    this.chamadasApisExternas();
    this._activatedRoute.params.subscribe((params: Params) => {
      console.log(params);
      console.log(this._activatedRoute.snapshot.data);
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }

  private chamadasApisExternas() {
    this._artigosService
      .listarUltimosArtigos()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (sucesso: any) => {
          console.log(sucesso);
          this.vitrineDados.ultimosArtigos = sucesso
        },
        error: () => { },
      });
  }
}
