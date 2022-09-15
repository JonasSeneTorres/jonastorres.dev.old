import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { ArtigosService } from 'projects/blog/src/app/services/artigos/artigos.service';
import { JumbotronService } from 'projects/blog/src/app/services/jumbotron/jumbotron.service';
import { VitrineDados } from 'projects/blog/src/app/types/vitrine-dados.type';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  vitrineDados: VitrineDados = {};
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _artigosService: ArtigosService,
    private _jumbotronService: JumbotronService,
    ) {
      this._jumbotronService.dadosJumbotrom$ = null;
    }

  ngOnInit(): void {
    this.chamadasApisExternas();
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
