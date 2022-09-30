import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './blog.component';
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

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'acessibilidade', component: AcessibilidadeComponent },
      { path: 'autores', component: AutoresComponent },
      { path: 'busca', component: BuscaComponent },
      { path: 'contato', component: ContatoComponent },
      { path: 'erro', component: ErroComponent },

      { path: 'sitemap', component: SitemapComponent },
      { path: 'sobre', component: SobreComponent },
      {
        path: 'pagina-nao-encontrada',
        component: PaginaNaoEncontradaComponent,
      },
      { path: ':grupo', component: GrupoComponent },
      { path: ':grupo/:categoria', component: CategoriaComponent },
      { path: ':grupo/:categoria/:artigo', component: ArtigoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
