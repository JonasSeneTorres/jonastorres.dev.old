import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtigoRoutingModule } from './artigo-routing.module';
import { ArtigoComponent } from './artigo.component';


@NgModule({
  declarations: [
    ArtigoComponent
  ],
  imports: [
    CommonModule,
    ArtigoRoutingModule
  ]
})
export class ArtigoModule { }
