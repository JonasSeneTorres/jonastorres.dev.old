import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./views/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'acessibilidade',
    loadChildren: () =>
      import('./views/acessibilidade/acessibilidade.module').then(
        (m) => m.AcessibilidadeModule
      ),
  },
  {
    path: 'autor',
    loadChildren: () =>
      import('./views/autor/autor.module').then((m) => m.AutorModule),
  },
  {
    path: 'erro',
    loadChildren: () =>
      import('./views/erro/erro.module').then((m) => m.ErroModule),
  },
  {
    path: 'categoria',
    loadChildren: () =>
      import('./views/categoria/categoria.module').then(
        (m) => m.CategoriaModule
      ),
  },
  { path: 'artigo', loadChildren: () => import('./views/artigo/artigo.module').then(m => m.ArtigoModule) },
  {
    path: '**',
    loadChildren: () =>
      import('./views/pagina-nao-encontrada/pagina-nao-encontrada.module').then(
        (m) => m.PaginaNaoEncontradaModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
