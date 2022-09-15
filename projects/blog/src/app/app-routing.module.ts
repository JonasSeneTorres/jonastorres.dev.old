import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '',   redirectTo: '/blog', pathMatch: 'full' },
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./views/home/home.module').then((m) => m.HomeModule),
  // },
  // {
  //   path: 'acessibilidade',
  //   loadChildren: () =>
  //     import('./views/acessibilidade/acessibilidade.module').then(
  //       (m) => m.AcessibilidadeModule
  //     ),
  // },
  // {
  //   path: 'blog/autor',
  //   loadChildren: () =>
  //     import('./views/autor/autor.module').then((m) => m.AutorModule),
  // },
  // {
  //   path: 'erro',
  //   loadChildren: () =>
  //     import('./views/erro/erro.module').then((m) => m.ErroModule),
  // },
  // {
  //   path: 'blog/categoria',
  //   loadChildren: () =>
  //     import('./views/categoria/categoria.module').then(
  //       (m) => m.CategoriaModule
  //     ),
  // },
  // {
  //   path: 'blog/frontend',
  //   loadChildren: () =>
  //     import('./views/categoria/categoria.module').then(
  //       (m) => m.CategoriaModule
  //     ),
  // },
  // {
  //   path: 'blog/backend',
  //   loadChildren: () =>
  //     import('./views/categoria/categoria.module').then(
  //       (m) => m.CategoriaModule
  //     ),
  // },
  // {
  //   path: 'blog/mobile',
  //   loadChildren: () =>
  //     import('./views/categoria/categoria.module').then(
  //       (m) => m.CategoriaModule
  //     ),
  // },
  // {
  //   path: 'blog/banco_de_dados',
  //   loadChildren: () =>
  //     import('./views/categoria/categoria.module').then(
  //       (m) => m.CategoriaModule
  //     ),
  // },
  // {
  //   path: 'blog/arquitetura',
  //   loadChildren: () =>
  //     import('./views/categoria/categoria.module').then(
  //       (m) => m.CategoriaModule
  //     ),
  // },
  // { path: 'artigo', loadChildren: () => import('./views/artigo/artigo.module').then(m => m.ArtigoModule) },
  // { path: 'blog/autor', loadChildren: () => import('./views/autor/autor.module').then(m => m.AutorModule) },
  // { path: 'contato', loadChildren: () => import('./views/contato/contato.module').then(m => m.ContatoModule) },
  // { path: 'sobre', loadChildren: () => import('./views/sobre/sobre.module').then(m => m.SobreModule) },
  // { path: 'busca', loadChildren: () => import('./views/busca/busca.module').then(m => m.BuscaModule) },
  // { path: 'sitemap', loadChildren: () => import('./views/sitemap/sitemap.module').then(m => m.SitemapModule) },
  // { path: 'login', loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule) },
  // { path: 'admin', loadChildren: () => import('./views/admin/admin.module').then(m => m.AdminModule) },
  // { path: '', loadChildren: () => import('./views/blog/blog.module').then(m => m.BlogModule) },
  { path: 'blog', loadChildren: () => import('./views/blog/blog.module').then(m => m.BlogModule) },
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
