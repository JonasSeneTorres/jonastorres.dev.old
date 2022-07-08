import { CommonModule } from '@angular/common';
import { ContatoComponent } from './contato.component';
import { ContatoRoutingModule } from './contato-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../components/shared.module';

@NgModule({
  declarations: [
    ContatoComponent
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    SharedModule
  ]
})
export class ContatoModule { }
