import { Component, OnDestroy, OnInit } from '@angular/core';
import { ArtigosService } from 'projects/blog/src/app/services/artigos/artigos.service';
import { BlogService } from 'projects/blog/src/app/services/blog/blog.service';
import { JumbotronService } from 'projects/blog/src/app/services/jumbotron/jumbotron.service';
import { VitrineDados } from 'projects/blog/src/app/types/vitrine-dados.type';
import { Subject, takeUntil } from 'rxjs';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  vitrineDados: VitrineDados = { ultimosArtigos: [] };

  constructor(
    private _artigosService: ArtigosService,
    private _blogService: BlogService,
    private _jumbotronService: JumbotronService
  ) {
    this._blogService.tornarBoxPrincipalTransparente(false);
    this._jumbotronService.inserirDados({
      titulo: '',
      subtitulo: '',
      categoria: '',
      compartilharBox: false,
      dataCriacao: undefined,
      dataEdicao: undefined,
      tempoLeitura: undefined,
    });
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
          this.vitrineDados.ultimosArtigos = sucesso;
        },
        error: () => {},
      });
  }
}
