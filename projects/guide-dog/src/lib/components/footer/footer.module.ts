import { CenteredPanelModule } from '../centered-box-min-size/centered-panel.module';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    CenteredPanelModule
  ],
  exports: [
    FooterComponent
  ],
})
export class FooterModule { }
