import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../components/shared.module';
import { SitemapComponent } from './sitemap.component';
import { SitemapRoutingModule } from './sitemap-routing.module';

@NgModule({
  declarations: [
    SitemapComponent
  ],
  imports: [
    CommonModule,
    SitemapRoutingModule,
    SharedModule
  ]
})
export class SitemapModule { }
