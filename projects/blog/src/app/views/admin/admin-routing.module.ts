import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ArtigoEdicaoComponent } from './views/artigo/artigo-edicao/artigo-edicao.component';
import { ArtigoComponent } from './views/artigo/artigo.component';
import { AutorEdicaoComponent } from './views/autor/autor-edicao/autor-edicao.component';
import { AutorComponent } from './views/autor/autor.component';
import { CategoriaEdicaoComponent } from './views/categoria/categoria-edicao/categoria-edicao.component';
import { CategoriaComponent } from './views/categoria/categoria.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { PerfilUsuarioEdicaoComponent } from './views/perfil-usuario/perfil-usuario-edicao/perfil-usuario-edicao.component';
import { PerfilUsuarioComponent } from './views/perfil-usuario/perfil-usuario.component';
import { RedesSociaisEdicaoComponent } from './views/redes-sociais/redes-sociais-edicao/redes-sociais-edicao.component';
import { RedesSociaisComponent } from './views/redes-sociais/redes-sociais.component';
import { UsuariosEdicaoComponent } from './views/usuarios/usuarios-edicao/usuarios-edicao.component';
import { UsuariosComponent } from './views/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '',   redirectTo: '/admin/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent},
      { path: 'artigos', component: ArtigoComponent },
      { path: 'artigos/novo', component: ArtigoEdicaoComponent },
      { path: 'artigos/editar/:id', component: ArtigoEdicaoComponent },
      { path: 'autores', component: AutorComponent },
      { path: 'autores/novo', component: AutorEdicaoComponent },
      { path: 'autores/editar/:id', component: AutorEdicaoComponent },
      { path: 'categorias', component: CategoriaComponent },
      { path: 'categorias/novo', component: CategoriaEdicaoComponent },
      { path: 'categorias/editar/:id', component: CategoriaEdicaoComponent },
      { path: 'perfil-usuario', component: PerfilUsuarioComponent },
      { path: 'perfil-usuario/novo', component: PerfilUsuarioEdicaoComponent },
      { path: 'perfil-usuario/editar/:id', component: PerfilUsuarioEdicaoComponent },
      { path: 'redes-sociais', component: RedesSociaisComponent },
      { path: 'redes-sociais/novo', component: RedesSociaisEdicaoComponent },
      { path: 'redes-sociais/editar/:id', component: RedesSociaisEdicaoComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'usuarios/novo', component: UsuariosEdicaoComponent },
      { path: 'usuarios/editar/:id', component: UsuariosEdicaoComponent },
      { path: '**', component: DashboardComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
