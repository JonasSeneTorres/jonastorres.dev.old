import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { ArtigosService } from 'projects/blog/src/app/services/artigos/artigos.service';
import { AutoresService } from 'projects/blog/src/app/services/autores/autores.service';
import { CategoriasService } from 'projects/blog/src/app/services/categorias/categorias.service';
import { ArtigoModel } from 'projects/blog/src/app/types/artigoModel';
import { forkJoin, Observable, takeUntil } from 'rxjs';

import { BaseAdminDetailComponent } from '../../base-admin-detail/base-admin-detail.component';

@Component({
  selector: 'jt-artigo-edicao',
  templateUrl: './artigo-edicao.component.html',
  styleUrls: ['./artigo-edicao.component.scss'],
})
export class ArtigoEdicaoComponent
  extends BaseAdminDetailComponent
  implements OnInit
{
  private _displayModal = false;

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
    protected override injector: Injector,
    private artigosService: ArtigosService,
    private autoresService: AutoresService,
    private categoriasService: CategoriasService
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.mapearParametrosDeRotas().subscribe(() => {
      this.breadcrumbsItem = [
        JonastorresRoutes.HOME.toBreadcrumb(),
        JonastorresRoutes.ADMIN.toBreadcrumb(),
        JonastorresRoutes.ADMIN_ARTIGOS.toBreadcrumb(),
      ];
      const breadcrumbNovo =
        JonastorresRoutes.ADMIN_ARTIGOS_NOVO.toBreadcrumb();
      const breadcrumbEditar =
        JonastorresRoutes.ADMIN_ARTIGOS_EDITAR.toBreadcrumb();

      this.obterDadosIniciais();
      this.ajustarBreadcrumb(this.id, breadcrumbNovo, breadcrumbEditar);
      this.criarForm();
    });
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

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    const artigo: ArtigoModel = {
      url: this.form.get('url')!.value,
      titulo: this.form.get('titulo')!.value,
      subtitulo: this.form.get('subtitulo')!.value,
      metatags: this.form.get('metatags')!.value,
      subcategoriaId: this.form.get('subcategoriaId')!.value,
      dataAgendamento: this.form.get('dataAgendamento')!.value,
      tempoLeitura: +this.form.get('tempoLeitura')!.value ?? 0,
      conteudoArtigo: this.form.get('conteudoArtigo')!.value,
      autorId: this.form.get('autorId')!.value,
      serieId: this.form.get('serieId')!.value,
    };

    this.gravarDados(
      artigo,
      artigo.titulo,
      JonastorresRoutes.ADMIN_ARTIGOS.router as any
    );
  }

  protected gravarDadosInclusao(dados: any): Observable<any> {
    const newGuid: any = Guid.create();
    dados.id = newGuid.value;
    dados.dataCriacao = new Date();
    dados.dataEdicao = undefined;
    console.log('criar', dados);
    return this.artigosService.inserir(dados);
  }

  protected gravarDadosEdicao(dados: any): Observable<any> {
    dados.id = this.id;
    dados.dataCriacao = this.form.get('dataCriacao')!.value;
    dados.dataEdicao = new Date();
    console.log(dados);
    return this.artigosService.atualizar(dados);
  }

  protected criarForm(): void {
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
      ativo: new FormControl(true),
      dataEdicao: new FormControl(''),
      dataAgendamento: new FormControl(''),
      tempoLeitura: new FormControl('0', Validators.required),
      conteudoArtigo: new FormControl('', Validators.required),
      autorId: new FormControl('', Validators.required),
      serieId: new FormControl(''),
    });

    if (this.ehEdicao) {
      this.prepararFormEdicao();
      return;
    }

    this.observarAlteracoesCategoria();
    this.observarAlteracoesUrl();
  }

  protected prepararFormEdicao(): void {
    this.artigosService.obter(this.id).subscribe((sucesso: any) => {
      console.log('sucesso: ', sucesso);
      const input = sucesso.subcategoriaId ?? '';
      const classificacaoSplit = input.split('-');
      const classificacaoId = `${classificacaoSplit[0]}`;
      let categoriaId = this.checarValoresCombosIniciais(
        `${classificacaoSplit[0]}-${classificacaoSplit[1]}`
      );
      let subcategoriaId = this.checarValoresCombosIniciais(
        `${classificacaoSplit[0]}-${classificacaoSplit[1]}-${classificacaoSplit[2]}`
      );
      this.observarAlteracoesCategoria();
      this.observarAlteracoesUrl();

      this._dataCriacao = sucesso.dataCriacao;
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
        ativo: sucesso.ativo,
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
    });
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

  private extrairListaClassificacao(
    sucesso: any
  ): { id: string; nome: string }[] {
    return sucesso.categorias.map((item: any) => ({
      id: item.classificacao.id,
      nome: item.classificacao.label,
    }));
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

  private filtrarListaCategoria() {
    const classificacaoId = this.form.get('classificacaoId')!.value;

    if (!classificacaoId) {
      return;
    }

    this.listaCategoria = this.listaClassificacaoBruta
      .filter(item => item.classificacao.id === classificacaoId)[0]
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
      filtroClassificacao =>
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
        this.popularComboCategoria();
      });

    this.form
      .get('categoriaId')!
      .valueChanges.pipe(takeUntil(this._destroy$))
      .subscribe(valorCategoria => {
        this.popularComboSubcategoria();
      });
  }

  private observarAlteracoesUrl() {
    this.form
      .get('subcategoriaId')!
      .valueChanges.pipe(takeUntil(this._destroy$))
      .subscribe((formValores: any) => {
        const classificacao = this.form.get('classificacaoId')!.value;
        const categoria = this.form.get('categoriaId')!.value;
        const subcategoria = this.form.get('subcategoriaId')!.value;
        let output: string = `/${classificacao}/${categoria}/${subcategoria}`;
        output =
          this.form.get('subcategoriaId')!.value.length === 0 ? '' : output;

        if (this.form.get('classificacaoId')!.value !== output) {
          this.form.patchValue({
            url: output,
          });
        }
      });
  }

  private popularComboCategoria(): void {
    try {
      this.form.patchValue({
        categoriaId: '',
        subcategoriaId: '',
      });

      if (this.form.get('classificacaoId')!.value === '') {
        this.listaCategoria = [];
        return;
      }

      this.filtrarListaCategoria();
    } catch (error) {}
  }

  private checarValoresCombosIniciais(valor: string): string {
    return valor.includes('undefined') ? '' : valor;
  }
}
