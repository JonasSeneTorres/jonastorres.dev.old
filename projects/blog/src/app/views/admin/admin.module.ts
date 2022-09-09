import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ArtigoComponent } from './views/artigo/artigo.component';
import { AutorComponent } from './views/autor/autor.component';
import { BoxArtigosRecentesComponent } from './components/box-artigos-recentes/box-artigos-recentes.component';
import { BoxComentariosRecentesComponent } from './components/box-comentarios-recentes/box-comentarios-recentes.component';
import { BoxNumLikesComponent } from './components/box-num-likes/box-num-likes.component';
import { BoxNumPostsComponent } from './components/box-num-posts/box-num-posts.component';
import { BoxNumSeguidoresComponent } from './components/box-num-seguidores/box-num-seguidores.component';
import { BoxNumVisualizacaoComponent } from './components/box-num-visualizacao/box-num-visualizacao.component';
import { BoxSistemasOperacionaisComponent } from './components/box-sistemas-operacionais/box-sistemas-operacionais.component';
import { CategoriaComponent } from './views/categoria/categoria.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { GraficoNumVisitantesComponent } from './components/grafico-num-visitantes/grafico-num-visitantes.component';
import { ListaMaisCompartilhadosSocialMediaComponent } from './components/lista-mais-compartilhados-social-media/lista-mais-compartilhados-social-media.component';
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
    BoxComentariosRecentesComponent,
    ListaMaisCompartilhadosSocialMediaComponent,
    BoxArtigosRecentesComponent,
    BoxSistemasOperacionaisComponent,
    DashboardComponent,
    CategoriaComponent,
    ArtigoComponent,
    AutorComponent,
    RedesSociaisComponent,
    UsuariosComponent,
    PerfilUsuarioComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class AdminModule { }
