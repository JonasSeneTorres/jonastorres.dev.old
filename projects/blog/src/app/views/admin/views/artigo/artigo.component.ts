import { Component, Injector, OnInit } from '@angular/core';

import { AdminCrudComponent } from '../admin-crud/admin-crud.component';
import { Observable, of } from 'rxjs';
import { ArtigosService } from 'projects/blog/src/app/services/artigos/artigos.service';

@Component({
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.scss'],
})
export class ArtigoComponent extends AdminCrudComponent implements OnInit {
  constructor(
    protected override injector: Injector,
    private artigosService: ArtigosService
    ) {
    super(injector);
    this.filtravelPelosCampos = ['titulo', 'categoriaId'];
  }

  ngOnInit(): void {
    this.listarItens();
  }

  protected listarItens() {
    this.artigosService.listar().subscribe({
      next: (sucesso) => {
        this.dados = sucesso;
        console.log(this.dados);
      },
      error: () => {

      }
    });
  }

  protected confirmarExclusao(registro: any): Observable<any> {
    console.log(registro);
    // return of({});
    const a = this.artigosService.apagar(registro.id);
    console.log(a);
    return a;
  }
}
