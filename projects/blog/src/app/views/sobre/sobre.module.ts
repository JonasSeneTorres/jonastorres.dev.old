import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../components/shared.module';
import { SobreComponent } from './sobre.component';
import { SobreRoutingModule } from './sobre-routing.module';

@NgModule({
  declarations: [
    SobreComponent
  ],
  imports: [
    CommonModule,
    SobreRoutingModule,
    SharedModule
  ]
})
export class SobreModule { }
