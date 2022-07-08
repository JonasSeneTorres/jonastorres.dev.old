import { CommonModule } from '@angular/common';
import { ErroComponent } from './erro.component';
import { ErroRoutingModule } from './erro-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../components/shared.module';

@NgModule({
  declarations: [
    ErroComponent
  ],
  imports: [
    CommonModule,
    ErroRoutingModule,
    SharedModule
  ]
})
export class ErroModule { }
