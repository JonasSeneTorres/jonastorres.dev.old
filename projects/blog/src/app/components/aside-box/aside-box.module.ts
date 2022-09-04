import { AsideBoxComponent } from './aside-box.component';
import { BoxBuscaModule } from './../box-busca/box-busca.module';
import { BoxCategoriasModule } from './../box-categorias/box-categorias.module';
import { CommonModule } from '@angular/common';
import { GuideDogModule } from "projects/guide-dog/src/public-api";
import { NgModule } from '@angular/core';
import { SigaNosModule } from '../siga-nos/siga-nos.module';

@NgModule({
  declarations: [
    AsideBoxComponent
  ],
  imports: [
    CommonModule,
    GuideDogModule,
    SigaNosModule,
    BoxCategoriasModule,
    BoxBuscaModule
  ],
  exports: [
    AsideBoxComponent
  ],
})
export class AsideBoxModule { }
