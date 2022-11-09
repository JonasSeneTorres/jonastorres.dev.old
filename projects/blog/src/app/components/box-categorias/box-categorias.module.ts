import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GuideDogModule } from 'projects/guide-dog/src/public-api';

import { BoxCategoriasComponent } from './box-categorias.component';

@NgModule({
  declarations: [BoxCategoriasComponent],
  imports: [CommonModule, RouterModule, GuideDogModule],
  exports: [BoxCategoriasComponent],
})
export class BoxCategoriasModule {}
