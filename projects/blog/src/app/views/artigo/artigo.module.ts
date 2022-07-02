import { ArtigoComponent } from './artigo.component';
import { ArtigoRoutingModule } from './artigo-routing.module';
import { AutorComponent } from './componentes/autor/autor.component';
import { BoxBuscaComponent } from './componentes/box-busca/box-busca.component';
import { BoxCategoriasComponent } from './componentes/box-categorias/box-categorias.component';
import { BoxCompartilheComponent } from './componentes/box-compartilhe/box-compartilhe.component';
import { BoxOutrosArtigosComponent } from './componentes/box-outros-artigos/box-outros-artigos.component';
import { CenteredPanelModule } from 'projects/guide-dog/src/lib/components/centered-panel/centered-panel.module';
import { CommonModule } from '@angular/common';
import { GuideDogModule } from 'projects/guide-dog/src/lib/guide-dog.module';
import { JumbotronComponent } from './componentes/jumbotron/jumbotron.component';
import { NgModule } from '@angular/core';
import { SigaNosComponent } from './componentes/siga-nos/siga-nos.component';
import { UltimosPostsComponent } from './componentes/ultimos-posts/ultimos-posts.component';

@NgModule({
  declarations: [
    ArtigoComponent,
    BoxBuscaComponent,
    BoxOutrosArtigosComponent,
    BoxCategoriasComponent,
    AutorComponent,
    SigaNosComponent,
    UltimosPostsComponent,
    BoxCompartilheComponent,
    JumbotronComponent
  ],
  imports: [
    CommonModule,
    ArtigoRoutingModule,
    // CenteredPanelModule,
    GuideDogModule,
  ]
})
export class ArtigoModule { }
