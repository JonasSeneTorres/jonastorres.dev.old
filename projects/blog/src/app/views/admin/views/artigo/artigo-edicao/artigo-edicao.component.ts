import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { PaginaModel } from 'projects/blog/src/app/types/artigoModel';
import { BreadcrumbsItem } from 'projects/guide-dog/src/lib/types/breadcrumbs-item.type';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'jt-artigo-edicao',
  templateUrl: './artigo-edicao.component.html',
  styleUrls: ['./artigo-edicao.component.scss'],
})
export class ArtigoEdicaoComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  form!: FormGroup;
  breadcrumbsItem: BreadcrumbsItem[];
  id = '';

  constructor(private route: ActivatedRoute) {
    this.breadcrumbsItem = [
      JonastorresRoutes.HOME.toBreadcrumb(),
      JonastorresRoutes.ADMIN.toBreadcrumb(),
      JonastorresRoutes.ADMIN_ARTIGOS.toBreadcrumb(),
    ];
    this.createForm();
  }

  ngOnInit() {
    this.route.params.pipe(takeUntil(this._destroy$)).subscribe((params) => {
      this.id = params['id'] ?? '';

      const breadcrumbNovo =
        JonastorresRoutes.ADMIN_ARTIGOS_NOVO.toBreadcrumb();
      const breadcrumbEditar =
        JonastorresRoutes.ADMIN_ARTIGOS_EDITAR.toBreadcrumb();
      this.ajustarBreadcrumb(this.id, breadcrumbNovo, breadcrumbEditar);
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }

  private createForm(dado?: PaginaModel) {
    this.form = new FormGroup({
      id: new FormControl(''),
      url: new FormControl(''),
      titulo: new FormControl(''),
      subtitulo: new FormControl(''),
      metatags: new FormControl(''),
      ClassificacaoId: new FormControl(''),
      dataCriacao: new FormControl(''),
      dataEdicao: new FormControl(''),
      dataAgendamento: new FormControl(''),
      tempoLeitura: new FormControl(''),
      conteudoArtigo: new FormControl(''),
      autorId: new FormControl(''),
      serieId: new FormControl(''),
    });

    if (dado) {
      this.form.patchValue({
        id: dado.id,
        url: dado.url,
        titulo: dado.titulo,
        subtitulo: dado,
        metatags: dado,
        ClassificacaoId: dado,
        dataCriacao: dado,
        dataEdicao: dado,
        dataAgendamento: dado,
        tempoLeitura: dado,
        conteudoArtigo: dado,
        autorId: dado,
        serieId: dado,
      });
    }
  }

  private ajustarBreadcrumb(
    id: string,
    breadcrumbNovo: BreadcrumbsItem,
    breadcrumbEditar: BreadcrumbsItem
  ) {
    let complementoBreadcrumbs = breadcrumbNovo;
    if (id.length > 0) {
      complementoBreadcrumbs = breadcrumbEditar;
    }

    this.breadcrumbsItem.push(complementoBreadcrumbs);
  }
}
