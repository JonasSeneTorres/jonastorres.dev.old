import { BoxCompartilheComponent } from './box-compartilhe.component';
import { CommonModule } from '@angular/common';
import { GuideDogModule } from 'projects/guide-dog/src/public-api';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [BoxCompartilheComponent],
  imports: [CommonModule, GuideDogModule],
  exports: [BoxCompartilheComponent],
})
export class BoxCompartilheModule {}
