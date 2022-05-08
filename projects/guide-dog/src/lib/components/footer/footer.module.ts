import { CenteredPanelModule } from '../centered-panel/centered-panel.module';
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
