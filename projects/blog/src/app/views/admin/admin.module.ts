import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ArtigoComponent } from './views/artigo/artigo.component';
import { ArtigoEdicaoComponent } from './views/artigo/artigo-edicao/artigo-edicao.component';
import { ArtigosRecentesComponent } from './components/artigos-recentes/artigos-recentes.component';
import { AutorComponent } from './views/autor/autor.component';
import { BaseAdminMasterComponent } from './views/base-admin-master/base-admin-master.component';
import { BoxNumLikesComponent } from './components/box-num-likes/box-num-likes.component';
import { BoxNumPostsComponent } from './components/box-num-posts/box-num-posts.component';
import { BoxNumSeguidoresComponent } from './components/box-num-seguidores/box-num-seguidores.component';
import { BoxNumVisualizacaoComponent } from './components/box-num-visualizacao/box-num-visualizacao.component';
import { CategoriaComponent } from './views/categoria/categoria.component';
import { ComentariosRecentesComponent } from './components/comentarios-recentes/comentarios-recentes.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { GraficoDesktopNavegadoresComponent } from './components/grafico-desktop-navegadores/grafico-desktop-navegadores.component';
import { GraficoDesktopSOComponent } from './components/grafico-desktop-so/grafico-desktop-so.component';
import { GraficoDispositivosComponent } from './components/grafico-dispositivos/grafico-dispositivos.component';
import { GraficoMobileNavegadoresComponent } from './components/grafico-mobile-navegadores/grafico-mobile-navegadores.component';
import { GraficoMobileSoComponent } from './components/grafico-mobile-so/grafico-mobile-so.component';
import { GraficoNumVisitantesComponent } from './components/grafico-num-visitantes/grafico-num-visitantes.component';
import { ListaCompartilhamentosComponent } from './components/lista-compartilhamentos/lista-compartilhamentos.component';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';
import { NgModule } from '@angular/core';
import { PerfilUsuarioComponent } from './views/perfil-usuario/perfil-usuario.component';
import { RedesSociaisComponent } from './views/redes-sociais/redes-sociais.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../components/shared.module';
import { UsuariosComponent } from './views/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AdminComponent,
    BoxNumSeguidoresComponent,
    BoxNumPostsComponent,
    BoxNumLikesComponent,
    BoxNumVisualizacaoComponent,
    GraficoNumVisitantesComponent,
    MenuAdminComponent,
    ComentariosRecentesComponent,
    ListaCompartilhamentosComponent,
    ArtigosRecentesComponent,
    GraficoDesktopSOComponent,
    DashboardComponent,
    CategoriaComponent,
    ArtigoComponent,
    AutorComponent,
    RedesSociaisComponent,
    UsuariosComponent,
    PerfilUsuarioComponent,
    GraficoMobileSoComponent,
    GraficoDesktopNavegadoresComponent,
    GraficoMobileNavegadoresComponent,
    GraficoDispositivosComponent,
    ArtigoEdicaoComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
