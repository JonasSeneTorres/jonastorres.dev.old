import { ArtigoComponent } from './views/artigo/artigo.component';
import { AutorComponent } from './components/autor/autor.component';
import { AutoresComponent } from './views/autores/autores.component';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BoxOutrosArtigosComponent } from './components/box-outros-artigos/box-outros-artigos.component';
import { BuscaComponent } from './views/busca/busca.component';
import { CategoriaComponent } from './views/categoria/categoria.component';
import { CommonModule } from '@angular/common';
import { GrupoComponent } from './views/grupo/grupo.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { PaginaNaoEncontradaComponent } from './views/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../components/shared.module';
import { VitrineComponent } from './components/vitrine/vitrine.component';
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
    // FrontendComponent,
    // BackendComponent,
    // ArquiteturaComponent,
    // AutoresComponent,
    // BancoDeDadosComponent
  ],
  imports: [CommonModule, BlogRoutingModule, RouterModule, SharedModule],
})
export class BlogModule {}
