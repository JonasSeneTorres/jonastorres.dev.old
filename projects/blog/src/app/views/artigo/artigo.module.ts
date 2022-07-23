import { ArtigoComponent } from './artigo.component';
import { ArtigoRoutingModule } from './artigo-routing.module';
import { AutorComponent } from './componentes/autor/autor.component';
import { BoxOutrosArtigosComponent } from './componentes/box-outros-artigos/box-outros-artigos.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../components/shared.module';

@NgModule({
  declarations: [
    ArtigoComponent,
    // BoxBuscaComponent,
    BoxOutrosArtigosComponent,
    // BoxCategoriasComponent,
    AutorComponent,
    // SigaNosComponent,
    // UltimosPostsComponent,
    // BoxCompartilheComponent,
    // JumbotronComponent
  ],
  imports: [
    CommonModule,
    ArtigoRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class ArtigoModule { }
