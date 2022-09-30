import { CommonModule } from '@angular/common';
import { GuideDogModule } from 'projects/guide-dog/src/public-api';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UltimosPostsComponent } from './ultimos-posts.component';

@NgModule({
  declarations: [UltimosPostsComponent],
  imports: [CommonModule, GuideDogModule, RouterModule],
  exports: [UltimosPostsComponent],
})
export class UltimosPostsModule {}
