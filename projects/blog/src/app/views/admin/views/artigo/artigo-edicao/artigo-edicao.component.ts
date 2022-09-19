import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { AutoresService } from 'projects/blog/src/app/services/autores/autores.service';
import { CategoriasService } from 'projects/blog/src/app/services/categorias/categorias.service';
import { PaginaModel } from 'projects/blog/src/app/types/artigoModel';
import { BreadcrumbsItem } from 'projects/guide-dog/src/lib/types/breadcrumbs-item.type';
import { forkJoin, Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'jt-artigo-edicao',
  templateUrl: './artigo-edicao.component.html',
  styleUrls: ['./artigo-edicao.component.scss'],
})
export class ArtigoEdicaoComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  private _displayModal = false;

  form!: FormGroup;
  breadcrumbsItem!: BreadcrumbsItem[];
  id = '';
  tipoDoModal: 'Autor' | 'Classificação' | 'Serie' | null = null;

  get displayModal(): boolean {
    return this._displayModal;
  }

  set displayModal(value: boolean) {
    if(!value) {
      this.tipoDoModal = null;
    }

    this._displayModal = value;
  }

  constructor(
    private _route: ActivatedRoute,
    private autoresService: AutoresService,
    private categoriasService: CategoriasService,
    ) {
    this.createForm();
  }

  ngOnInit() {
    this._route.params.pipe(takeUntil(this._destroy$)).subscribe((params) => {
      this.id = params['id'] ?? '';
      this.montarBreadcrumb();
    });

    this.obterDadosIniciais()
    .pipe(takeUntil(this._destroy$))
    .subscribe({
      next: (sucesso: any) => {
        console.log(sucesso);
      },
      error: (erro: Error) => {
        console.error(`${erro.name}: ${erro.message}`);
      }
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }

  abrirModalAutor() {
    this.tipoDoModal = 'Autor';
    this.displayModal = true;
  }

  abrirModalClassificacao() {
    this.tipoDoModal = 'Classificação';
    this.displayModal = true;
  }

  abrirModalSerie() {
    this.tipoDoModal = 'Serie';
    this.displayModal = true;
  }

  private montarBreadcrumb() {
    this.breadcrumbsItem = [
      JonastorresRoutes.HOME.toBreadcrumb(),
      JonastorresRoutes.ADMIN.toBreadcrumb(),
      JonastorresRoutes.ADMIN_ARTIGOS.toBreadcrumb(),
    ];

    const breadcrumbNovo = JonastorresRoutes.ADMIN_ARTIGOS_NOVO.toBreadcrumb();
    const breadcrumbEditar =
      JonastorresRoutes.ADMIN_ARTIGOS_EDITAR.toBreadcrumb();

    let complementoBreadcrumbs = breadcrumbNovo;
    if (this.id.length > 0) {
      complementoBreadcrumbs = breadcrumbEditar;
    }

    this.breadcrumbsItem.push(complementoBreadcrumbs);
  }

  private obterDadosIniciais(): Observable<any> {
    const obterAutores = this.autoresService.listar();
    const obterCategorias = this.categoriasService.listar();
    // const obterCategorias = this.categoriasService.listar();
    // const obterUltimosArtigos = this.artigosService.listarUltimosArtigos();

    return forkJoin({
      autores: obterAutores,
      categorias: obterCategorias,
      // ultimosArtigos: obterUltimosArtigos,
    });
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
}
