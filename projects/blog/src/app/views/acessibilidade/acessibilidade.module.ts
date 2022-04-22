import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcessibilidadeRoutingModule } from './acessibilidade-routing.module';
import { AcessibilidadeComponent } from './acessibilidade.component';


@NgModule({
  declarations: [
    AcessibilidadeComponent
  ],
  imports: [
    CommonModule,
    AcessibilidadeRoutingModule
  ]
})
export class AcessibilidadeModule { }
