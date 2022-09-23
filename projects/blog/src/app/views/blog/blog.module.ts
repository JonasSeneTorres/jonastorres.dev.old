import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../../components/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { AutorComponent } from './components/autor/autor.component';
import { BoxOutrosArtigosComponent } from './components/box-outros-artigos/box-outros-artigos.component';
import { VitrineComponent } from './components/vitrine/vitrine.component';
import { AcessibilidadeComponent } from './views/acessibilidade/acessibilidade.component';
import { ArtigoComponent } from './views/artigo/artigo.component';
import { AutoresComponent } from './views/autores/autores.component';
import { BuscaComponent } from './views/busca/busca.component';
import { CategoriaComponent } from './views/categoria/categoria.component';
import { ContatoComponent } from './views/contato/contato.component';
import { ErroComponent } from './views/erro/erro.component';
import { GrupoComponent } from './views/grupo/grupo.component';
import { HomeComponent } from './views/home/home.component';
import { PaginaNaoEncontradaComponent } from './views/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { SitemapComponent } from './views/sitemap/sitemap.component';
import { SobreComponent } from './views/sobre/sobre.component';

@NgModule({
  declarations: [
    BlogComponent,
    HomeComponent,
    CategoriaComponent,
    GrupoComponent,
    ArtigoComponent,
    VitrineComponent,
    AutoresComponent,
    BuscaComponent,
    PaginaNaoEncontradaComponent,
    AutorComponent,
    BoxOutrosArtigosComponent,
    SobreComponent,
    SitemapComponent,
    ContatoComponent,
    ErroComponent,
    AcessibilidadeComponent,
  ],
  imports: [CommonModule, BlogRoutingModule, RouterModule, SharedModule],
})
export class BlogModule {}
