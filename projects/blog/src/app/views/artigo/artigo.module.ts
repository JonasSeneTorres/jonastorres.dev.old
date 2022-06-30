import { ArtigoComponent } from './artigo.component';
import { ArtigoRoutingModule } from './artigo-routing.module';
import { BoxBuscaComponent } from './componentes/box-busca/box-busca.component';
import { BoxOutrosArtigosComponent } from './componentes/box-outros-artigos/box-outros-artigos.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BoxCategoriasComponent } from './componentes/box-categorias/box-categorias.component';
import { AutorComponent } from './componentes/autor/autor.component';
import { SigaNosComponent } from './componentes/siga-nos/siga-nos.component';
import { UltimosPostsComponent } from './componentes/ultimos-posts/ultimos-posts.component';
import { BoxCompartilheComponent } from './componentes/box-compartilhe/box-compartilhe.component';

@NgModule({
  declarations: [
    ArtigoComponent,
    BoxBuscaComponent,
    BoxOutrosArtigosComponent,
    BoxCategoriasComponent,
    AutorComponent,
    SigaNosComponent,
    UltimosPostsComponent,
    BoxCompartilheComponent
  ],
  imports: [
    CommonModule,
    ArtigoRoutingModule
  ]
})
export class ArtigoModule { }
