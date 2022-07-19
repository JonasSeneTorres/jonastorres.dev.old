import { BoxArtigoComponent } from './/box-artigo.component';
import { CommonModule } from '@angular/common';
import { GeraSpoilerPipe } from './../../../../../guide-dog/src/lib/pipes/gera-spoiler.pipe';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    BoxArtigoComponent, GeraSpoilerPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BoxArtigoComponent, GeraSpoilerPipe
  ]
})
export class BoxArtigoModule { }
