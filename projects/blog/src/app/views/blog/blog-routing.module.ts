import { RouterModule, Routes } from '@angular/router';

import { ArtigoComponent } from './views/artigo/artigo.component';
import { AutoresComponent } from './views/autores/autores.component';
import { BlogComponent } from './blog.component';
import { BuscaComponent } from './views/busca/busca.component';
import { CategoriaComponent } from './views/categoria/categoria.component';
import { GrupoComponent } from './views/grupo/grupo.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { PaginaNaoEncontradaComponent } from './views/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { SobreComponent } from './views/sobre/sobre.component';

const routes: Routes = [{ path: '', component: BlogComponent, children: [
  { path: '', component: HomeComponent},
  { path: 'categoria',   redirectTo: '/blog', pathMatch: 'full' },
  { path: 'autores', component: AutoresComponent },
  { path: 'busca', component: BuscaComponent },
  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
  { path: 'sobre', component: SobreComponent },
  { path: ':grupo', component: GrupoComponent },
  { path: ':grupo/:categoria', component: CategoriaComponent },
  { path: ':grupo/:categoria/:artigo', component: ArtigoComponent },
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
