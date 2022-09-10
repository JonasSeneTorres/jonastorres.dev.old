import { AsideBoxModule } from './aside-box/aside-box.module';
import { BoxArtigoModule } from './box-artigo/box-artigo.module';
import { BoxBuscaModule } from './box-busca/box-busca.module';
import { BoxCategoriasModule } from './box-categorias/box-categorias.module';
import { BoxCompartilheModule } from './box-compartilhe/box-compartilhe.module';
import { CommonModule } from '@angular/common';
import { GuideDogModule } from 'projects/guide-dog/src/lib/guide-dog.module';
import { JumbotronModule } from './jumbotron/jumbotron.module';
import { NgChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { SigaNosModule } from './siga-nos/siga-nos.module';
import { UltimosPostsModule } from './ultimos-posts/ultimos-posts.module';

const modulosCompartilhados = [
  GuideDogModule,
  BoxBuscaModule,
  BoxCategoriasModule,
  BoxCompartilheModule,
  JumbotronModule,
  SigaNosModule,
  UltimosPostsModule,
  BoxArtigoModule,
  AsideBoxModule,
  NgChartsModule
];

@NgModule({
  imports: [CommonModule, ...modulosCompartilhados],
  exports: [
    ...modulosCompartilhados
  ],
})
export class SharedModule {}
