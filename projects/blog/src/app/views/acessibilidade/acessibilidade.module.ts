import { AcessibilidadeComponent } from './acessibilidade.component';
import { AcessibilidadeRoutingModule } from './acessibilidade-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../components/shared.module';

@NgModule({
  declarations: [
    AcessibilidadeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AcessibilidadeRoutingModule
  ]
})
export class AcessibilidadeModule { }
