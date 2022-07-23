import { BoxArtigoComponent } from './/box-artigo.component';
import { CommonModule } from '@angular/common';
import { GeraSpoilerPipe } from 'projects/guide-dog/src/lib/pipes/gera-spoiler.pipe';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BoxArtigoComponent, GeraSpoilerPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BoxArtigoComponent, GeraSpoilerPipe
  ]
})
export class BoxArtigoModule { }
