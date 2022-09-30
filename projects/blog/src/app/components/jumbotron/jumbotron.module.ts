import { CommonModule } from '@angular/common';
import { GuideDogModule } from 'projects/guide-dog/src/public-api';
import { JumbotronComponent } from './jumbotron.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [JumbotronComponent],
  imports: [CommonModule, GuideDogModule],
  exports: [JumbotronComponent],
})
export class JumbotronModule {}
