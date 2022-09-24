import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { ArtigosService } from 'projects/blog/src/app/services/artigos/artigos.service';
import { AutoresService } from 'projects/blog/src/app/services/autores/autores.service';
import { CategoriasService } from 'projects/blog/src/app/services/categorias/categorias.service';
import { ArtigoModel } from 'projects/blog/src/app/types/artigoModel';
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

  breadcrumbsItem!: BreadcrumbsItem[];
  form!: FormGroup;
  id = '';
  ehEdicao = false;
  tipoDoModal: 'Autor' | 'Classificação' | 'Serie' | null = null;
  listaAutor: { nome: string; id: string }[] = [];
  listaClassificacaoBruta: any[] = [];
  listaClassificacao: { nome: string; id: string }[] = [];
  listaCategoria: { nome: string; id: string }[] = [];
  listaSubcategoria: { nome: string; id: string }[] = [];
  listaSerie: { nome: string; id: string }[] = [];

  get displayModal(): boolean {
    return this._displayModal;
  }

  set displayModal(value: boolean) {
    if (!value) {
      this.tipoDoModal = null;
    }

    this._displayModal = value;
  }

  constructor(
    private artigosService: ArtigosService,
    private autoresService: AutoresService,
    private categoriasService: CategoriasService,
    private router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._route.params.pipe(takeUntil(this._destroy$)).subscribe((params) => {
      this.id = params['id'] ?? '';
      this.ehEdicao = this.id.length > 0;

      this.montarBreadcrumb();
      this.createForm();
      this.obterDadosIniciais();
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

  equalizarTexto(event: any) {
    this.form.patchValue({
      conteudoArtigo: event.target.value,
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    const artigo: ArtigoModel = {
      // id?: Guid,
      url: this.form.get('url')!.value,
      titulo: this.form.get('titulo')!.value,
      subtitulo: this.form.get('subtitulo')!.value,
      metatags: this.form.get('metatags')!.value,
      subcategoriaId: this.form.get('subcategoriaId')!.value,
      // dataCriacao: this.form.get('classificacaoId')!.value,
      // dataEdicao?: Date,
      dataAgendamento:  this.form.get('dataAgendamento')!.value,
      tempoLeitura: +this.form.get('tempoLeitura')!.value ?? 0,
      conteudoArtigo: this.form.get('conteudoArtigo')!.value,
      autorId: this.form.get('autorId')!.value,
      serieId:  this.form.get('serieId')!.value,
    }// this.form.value;

    this.setarTipoOperacao(artigo).subscribe({
      next: () => {
        console.log(JonastorresRoutes.ADMIN_ARTIGOS.router);
        this.router.navigate(JonastorresRoutes.ADMIN_ARTIGOS.router as any[]);
      },
      error: (error: Error) => {
        console.error(error);
      },
    });
  }

  private setarTipoOperacao(artigo: ArtigoModel) {
    if (this.ehEdicao) {
      artigo.id = this.id;
      artigo.dataCriacao = this.form.get('dataCriacao')!.value,
      artigo.dataEdicao = new Date();
      console.log(artigo);
      return this.artigosService.atualizar(artigo);
    }

    const newGuid: any = Guid.create();
    artigo.id = newGuid.value;
    artigo.dataCriacao = new Date();
    artigo.dataEdicao = undefined;
    console.log('criar', artigo);
    return this.artigosService.inserir(artigo);
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
    if (this.ehEdicao) {
      complementoBreadcrumbs = breadcrumbEditar;
    }

    this.breadcrumbsItem.push(complementoBreadcrumbs);
  }

  private obterDadosAPI(): Observable<any> {
    const obterAutores = this.autoresService.listar();
    const obterCategorias = this.categoriasService.listar();

    return forkJoin({
      autores: obterAutores,
      categorias: obterCategorias,
    });
  }

  private obterDadosIniciais() {
    this.obterDadosAPI()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (sucesso: any) => {
          this.obterDadosIniciaisSucesso(sucesso);
        },
        error: (erro: Error) => {
          console.error(`${erro.name}: ${erro.message}`);
        },
      });
  }

  private obterDadosIniciaisSucesso(sucesso: any) {
    this.listaAutor = sucesso.autores.map((autor: any) => ({
      id: autor.id,
      nome: autor.nome,
    }));

    this.listaClassificacaoBruta = sucesso.categorias;
    this.listaClassificacao = this.extrairListaClassificacao(sucesso);

    if (this.ehEdicao) {
      this.filtrarListaCategoria();
      this.filtrarListaSubcategoria();
    }
  }

  private extrairListaClassificacao(
    sucesso: any
  ): { id: string; nome: string }[] {
    return sucesso.categorias.map((item: any) => ({
      id: item.classificacao.id,
      nome: item.classificacao.label,
    }));
  }

  private popularComboCategoria(): void {
    this.form.patchValue({
      categoriaId: '',
      subcategoriaId: '',
    });

    if (this.form.get('classificacaoId')!.value === '') {
      this.listaCategoria = [];
      return;
    }

    this.filtrarListaCategoria();
  }

  private filtrarListaCategoria() {
    const classificacaoId = this.form.get('classificacaoId')!.value;

    if (!classificacaoId) {
      return;
    }

    this.listaCategoria = this.listaClassificacaoBruta
      .filter((item) => item.classificacao.id === classificacaoId)[0]
      .classificacao.categorias.map((itemFiltrado: any) => ({
        nome: itemFiltrado.label,
        id: itemFiltrado.id,
      }));
  }

  private filtrarListaSubcategoria() {
    const classificacaoId = this.form.get('classificacaoId')!.value;

    if (!classificacaoId) {
      return;
    }

    const itemClassificacao = this.listaClassificacaoBruta.filter(
      (filtroClassificacao) =>
        filtroClassificacao.classificacao.id === classificacaoId
    )[0];
    const itemSubcategorias = itemClassificacao.classificacao.categorias.filter(
      (x: any) => x.id === this.form.get('categoriaId')!.value
    )[0].subcategorias;
    this.listaSubcategoria = this.formatarOpcoesSubcategoria(itemSubcategorias);
  }

  private formatarOpcoesSubcategoria(
    itemSubcategorias: any
  ): { nome: string; id: string }[] {
    return itemSubcategorias.map((resultado: any) => ({
      nome: resultado.nome,
      id: resultado.id,
    }));
  }

  private popularComboSubcategoria() {
    this.form.patchValue({ subcategoriaId: '' });

    const classificacaoIdVazio = this.form.get('classificacaoId')!.value === '';
    const categoriaVazio = this.form.get('categoriaId')!.value === '';
    const subcategoriaVazio = this.form.get('categoriaId')!.value === '';

    if (classificacaoIdVazio || categoriaVazio || subcategoriaVazio) {
      this.listaSubcategoria = [];
      return;
    }

    this.filtrarListaSubcategoria();
  }

  private observarAlteracoesCategoria() {
    this.form
      .get('classificacaoId')!
      .valueChanges.pipe(takeUntil(this._destroy$))
      .subscribe((valorClassificacao: any) => {
        // console.log('classificacao alterada', valorClassificacao);
        this.popularComboCategoria();
      });

    this.form
      .get('categoriaId')!
      .valueChanges.pipe(takeUntil(this._destroy$))
      .subscribe((valorCategoria) => {
        // console.log('categoria alterada', valorCategoria);
        this.popularComboSubcategoria();
      });
  }

  private observarAlteracoesUrl() {
    this.form
      .get('subcategoriaId')!
      .valueChanges.pipe(takeUntil(this._destroy$))
      .subscribe((formValores: any) => {
        console.log('form alterada', formValores);
        // this.popularComboCategoria();
        const classificacao = this.form.get('classificacaoId')!.value;
        const categoria = this.form.get('categoriaId')!.value;
        const subcategoria = this.form.get('subcategoriaId')!.value;
        let output:string = `/${classificacao}/${categoria}/${subcategoria}`;
        output = this.form.get('subcategoriaId')!.value.length === 0 ? '': output;

        if (this.form.get('classificacaoId')!.value !== output) {
          this.form.patchValue({
            url: output,
          });
        }
      });


  }

  private createForm(dado?: ArtigoModel) {
    this.form = new FormGroup({
      id: new FormControl(''),
      url: new FormControl('', Validators.required),
      titulo: new FormControl('', Validators.required),
      subtitulo: new FormControl(''),
      metatags: new FormControl('', Validators.required),
      classificacaoId: new FormControl(''),
      categoriaId: new FormControl(''),
      subcategoriaId: new FormControl('', Validators.required),
      dataCriacao: new FormControl(''),
      dataEdicao: new FormControl(''),
      dataAgendamento: new FormControl(''),
      tempoLeitura: new FormControl('0', Validators.required),
      conteudoArtigo: new FormControl('', Validators.required),
      autorId: new FormControl('', Validators.required),
      serieId: new FormControl(''),
    });

    if (this.ehEdicao) {
      this.prepararFormEdicao();
    }

    this.observarAlteracoesCategoria();
    this.observarAlteracoesUrl();
  }

  private prepararFormEdicao() {
    this.artigosService.obter(this.id).subscribe((sucesso: any) => {
      console.log('sucesso: ', sucesso);
      const input = sucesso.classificacaoId ?? '';
      const classificacaoSplit = input.split('-');
      const classificacaoId = `${classificacaoSplit[0]}`;
      let categoriaId = this.checarValoresCombosIniciais(
        `${classificacaoSplit[0]}-${classificacaoSplit[1]}`
      );
      let subcategoriaId = this.checarValoresCombosIniciais(
        `${classificacaoSplit[0]}-${classificacaoSplit[1]}-${classificacaoSplit[2]}`
      );

      this.form.patchValue({
        id: sucesso.id,
        url: sucesso.url,
        titulo: sucesso.titulo,
        subtitulo: sucesso.subtitulo,
        metatags: sucesso.metatags,
        classificacaoId: classificacaoId,
        categoriaId: categoriaId,
        subcategoriaId: subcategoriaId,
        dataCriacao: (sucesso.dataCriacao ?? '').split('T')[0],
        dataEdicao: sucesso.dataEdicao?.split('T')[0],
        dataAgendamento: sucesso.dataAgendamento?.split('T')[0],
        tempoLeitura: sucesso.tempoLeitura,
        conteudoArtigo: sucesso.conteudoArtigo,
        autorId: sucesso.autorId,
        serieId: sucesso.serieId,
      });

      this.form.patchValue({
        categoriaId: categoriaId,
      });

      this.form.patchValue({
        subcategoriaId: subcategoriaId,
      });

      // this.observarAlteracoesCategoria();
      // this.observarAlteracoesUrl();
    });
  }

  private checarValoresCombosIniciais(valor: string): string {
    return valor.includes('undefined') ? '' : valor;
  }
}
