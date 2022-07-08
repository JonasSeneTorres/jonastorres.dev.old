import { BuscaComponent } from './busca.component';
import { BuscaRoutingModule } from './busca-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../components/shared.module';

@NgModule({
  declarations: [
    BuscaComponent
  ],
  imports: [
    CommonModule,
    BuscaRoutingModule,
    SharedModule
  ]
})
export class BuscaModule { }
