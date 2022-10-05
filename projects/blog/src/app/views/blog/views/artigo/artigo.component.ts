import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { JonastorresRoutes } from 'projects/blog/src/app/enuns/jonastorres-routes.enum';
import { ArtigosService } from 'projects/blog/src/app/services/artigos/artigos.service';
import { AutoresService } from 'projects/blog/src/app/services/autores/autores.service';
import { BlogService } from 'projects/blog/src/app/services/blog/blog.service';
import { CategoriasService } from 'projects/blog/src/app/services/categorias/categorias.service';
import { JumbotronService } from 'projects/blog/src/app/services/jumbotron/jumbotron.service';
import { BreadcrumbsItem } from 'projects/guide-dog/src/lib/types/breadcrumbs-item.type';
import { forkJoin, Observable, Subject, takeUntil } from 'rxjs';

@Component({
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.scss'],
})
export class ArtigoComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  dadosArtigo: any;
  categorias: any[] = [];
  ultimosArtigos: any[] = [];
  listaArquivoSerie: any[] = [];
  dadosAutor: any;
  categoriaArtigo: string = '';
  breadcrumbsItem: BreadcrumbsItem[];

  constructor(
    private _artigosService: ArtigosService,
    private _categoriasService: CategoriasService,
    private _autoresService: AutoresService,
    private _blogService: BlogService,
    private _jumbotronService: JumbotronService,
    private _activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this._blogService.tornarBoxPrincipalTransparente(true);
    this.breadcrumbsItem = [];
  }

  ngOnInit(): void {
    this._activatedRoute.params.pipe(takeUntil(this._destroy$)).subscribe((params: Params) => {
      const labelGrupo = `${params['grupo']}`;
      const routeGrupo = `/blog/${params['grupo']}`;
      const labelCategoria = `${params['categoria']}`;
      const routeCategoria = `/blog/${params['grupo']}/${params['categoria']}`;
      const labelArtigo = `${params['artigo']}`;
      const routeArtigo = `/blog/${params['grupo']}/${params['categoria']}/${params['artigo']}`;
      const idArtigo = params['artigo'] ?? '';

      this.breadcrumbsItem = [JonastorresRoutes.HOME.toBreadcrumb()];

      if (labelGrupo !== 'categoria') {
        this.breadcrumbsItem.push({ label: labelGrupo, route: [routeGrupo] });
      }
      this.breadcrumbsItem.push({
        label: labelCategoria,
        route: [routeCategoria],
      });
      this.breadcrumbsItem.push({ label: labelArtigo, route: [routeArtigo] });

      this.obterDadosIniciais();
    });
  }

  private obterDadosIniciais() {
    this.consutarDadosIniciais()
      .pipe(takeUntil(this._destroy$))
      .subscribe((sucesso: any) => {
        this.dadosArtigo = sucesso.artigo[0];
        this.categorias = sucesso.categorias ?? [];
        this.ultimosArtigos = sucesso.ultimosArtigos ?? [];

        const nomeArtigo = this.categorias.filter(item => item.id === this.dadosArtigo.categoriaId)[0]?.nome;
        this.categoriaArtigo = (nomeArtigo ?? '').toLowerCase();
        console.log(sucesso.categorias);
        this._jumbotronService.inserirDados({
          titulo: this.dadosArtigo.titulo,
          subtitulo: this.dadosArtigo.subtitulo,
          categoria: 'html',
          compartilharBox: true,
          dataCriacao: this.dadosArtigo.dataCriacao,
          dataEdicao: this.dadosArtigo.dataEdicao,
          tempoLeitura: this.dadosArtigo.tempoLeitura,
        });

        if (this.dadosArtigo.serieId !== '') {
          this.obterDadosArtigoSerie()
            .pipe(takeUntil(this._destroy$))
            .subscribe((sucessoArtigoSerie: any) => {
              this.listaArquivoSerie = sucessoArtigoSerie ?? [];
            });
        }

        console.log(this.dadosArtigo);
        this.obterDadosAutor(this.dadosArtigo.autorId)
          .pipe(takeUntil(this._destroy$))
          .subscribe((sucesso: any) => {
            this.dadosAutor = sucesso;
          });
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }

  private consutarDadosIniciais(): Observable<any> {
    const obterArtigo = this._artigosService.obterPorURL(this.router.url);
    const obterCategorias = this._categoriasService.listar();
    const obterUltimosArtigos = this._artigosService.listarUltimosArtigos();

    return forkJoin({
      artigo: obterArtigo,
      categorias: obterCategorias,
      ultimosArtigos: obterUltimosArtigos,
    });
  }

  private obterDadosArtigoSerie() {
    const serieId = this.dadosArtigo.serieId;
    return this._artigosService.listarArtigosSerie(serieId);
  }

  private obterDadosAutor(id: string) {
    return this._autoresService.obter(id);
  }
}
