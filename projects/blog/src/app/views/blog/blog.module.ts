import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../components/shared.module';
import { CategoriaComponent } from './views/categoria/categoria.component';
import { GrupoComponent } from './views/grupo/grupo.component';
import { ArtigoComponent } from './views/artigo/artigo.component';
import { VitrineComponent } from './components/vitrine/vitrine.component';

@NgModule({
  declarations: [
    BlogComponent,
    HomeComponent,
    CategoriaComponent,
    GrupoComponent,
    ArtigoComponent,
    VitrineComponent,
    // FrontendComponent,
    // BackendComponent,
    // ArquiteturaComponent,
    // AutoresComponent,
    // BancoDeDadosComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    RouterModule,
    SharedModule,
  ]
})
export class BlogModule { }
