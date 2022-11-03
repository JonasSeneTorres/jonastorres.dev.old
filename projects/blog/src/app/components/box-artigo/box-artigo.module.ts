import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GeraSpoilerPipe } from 'projects/guide-dog/src/lib/pipes/gera-spoiler.pipe';

import { BoxArtigoComponent } from './box-artigo.component';

@NgModule({
  declarations: [BoxArtigoComponent, GeraSpoilerPipe],
  imports: [CommonModule, RouterModule],
  exports: [BoxArtigoComponent, GeraSpoilerPipe],
})
export class BoxArtigoModule {}
