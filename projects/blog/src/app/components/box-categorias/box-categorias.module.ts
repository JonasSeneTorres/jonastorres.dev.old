import { BoxCategoriasComponent } from './box-categorias.component';
import { CommonModule } from '@angular/common';
import { GuideDogModule } from 'projects/guide-dog/src/public-api';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BoxCategoriasComponent],
  imports: [CommonModule, RouterModule, GuideDogModule],
  exports: [BoxCategoriasComponent],
})
export class BoxCategoriasModule {}
