import { ChangeDetectorRef, Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterBaseComponent } from 'projects/guide-dog/src/lib/components/master-base/master-base.component';
import { forkJoin, Observable, takeUntil } from 'rxjs';

import { BlogService } from '../../services/blog/blog.service';
import { ArtigosService } from './../../services/artigos/artigos.service';
import { CategoriasService } from './../../services/categorias/categorias.service';

@Component({
  selector: 'jt-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent extends MasterBaseComponent implements OnInit, OnDestroy {
  // private _destroy$: Subject<boolean> = new Subject<boolean>();

  categorias = [];
  ultimosArtigos = [];
  boxPrincipalTransparente: Observable<boolean>;

  constructor(
    private _artigosService: ArtigosService,
    private _categoriasService: CategoriasService,
    private _blogService: BlogService,
    private _router: Router,
    private _changeDetectorRef: ChangeDetectorRef,
    protected override injector: Injector
  ) {
    super(injector);
    this.boxPrincipalTransparente = this._blogService.boxPrincipalTransparente;
  }

  override ngOnInit(): void {
    super.ngOnInit();
    forkJoin({
      artigos: this._artigosService.listarUltimosArtigos(),
      categorias: this._categoriasService.listar(),
      buscar: this._artigosService.itensBuscados$,
    })
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: sucesso => {
          this.ultimosArtigos = sucesso.artigos;
          this.categorias = sucesso.categorias;
          this.escutarBusca(sucesso.buscar);
        },
        error: () => {},
      });

    this.boxPrincipalTransparente.pipe(takeUntil(this._destroy$)).subscribe(() => {
      this._changeDetectorRef.detectChanges();
    });
  }

  // ngOnDestroy() {
  //   this._destroy$.next(true);
  //   this._destroy$.unsubscribe();
  // }

  private escutarBusca(dados: Observable<any>) {
    dados.pipe(takeUntil(this._destroy$)).subscribe(data => {
      this._router.navigate([''], { queryParams: { por: data } });
    });
  }
}
