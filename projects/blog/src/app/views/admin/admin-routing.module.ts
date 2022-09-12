import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ArtigoComponent } from './views/artigo/artigo.component';
import { ArtigoEdicaoComponent } from './views/artigo/artigo-edicao/artigo-edicao.component';
import { AutorComponent } from './views/autor/autor.component';
import { CategoriaComponent } from './views/categoria/categoria.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { PerfilUsuarioComponent } from './views/perfil-usuario/perfil-usuario.component';
import { RedesSociaisComponent } from './views/redes-sociais/redes-sociais.component';
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
      { path: 'categorias', component: CategoriaComponent },
      { path: 'perfil-usuarios', component: PerfilUsuarioComponent },
      {
        path: 'redes-sociais',
        component: RedesSociaisComponent,
        // outlet: 'adminOutlet',
      },
      { path: 'usuarios', component: UsuariosComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
