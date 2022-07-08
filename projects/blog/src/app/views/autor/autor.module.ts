import { AutorComponent } from './autor.component';
import { AutorRoutingModule } from './autor-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../components/shared.module';

@NgModule({
  declarations: [
    AutorComponent
  ],
  imports: [
    CommonModule,
    AutorRoutingModule,
    SharedModule
  ]
})
export class AutorModule { }
