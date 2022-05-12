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
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
