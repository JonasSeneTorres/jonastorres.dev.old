import { RouterModule, Routes } from '@angular/router';

import { ArtigoComponent } from './views/artigo/artigo.component';
import { BlogComponent } from './blog.component';
import { CategoriaComponent } from './views/categoria/categoria.component';
import { GrupoComponent } from './views/grupo/grupo.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: BlogComponent, children: [
  { path: '', component: HomeComponent},
  { path: 'categoria',   redirectTo: '/blog', pathMatch: 'full' },
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
