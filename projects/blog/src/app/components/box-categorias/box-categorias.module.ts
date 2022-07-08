import { BoxCategoriasComponent } from './box-categorias.component';
import { CommonModule } from '@angular/common';
import { GuideDogModule } from 'projects/guide-dog/src/public-api';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [BoxCategoriasComponent],
  imports: [CommonModule, GuideDogModule],
  exports: [BoxCategoriasComponent],
})
export class BoxCategoriasModule {}
