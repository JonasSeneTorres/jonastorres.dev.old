import { BoxBuscaComponent } from './box-busca.component';
import { CommonModule } from '@angular/common';
import { GuideDogModule } from 'projects/guide-dog/src/public-api';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [BoxBuscaComponent],
  imports: [CommonModule, GuideDogModule],
  exports: [BoxBuscaComponent],
})
export class BoxBuscaModule {}
