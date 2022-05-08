import { CenteredPanelModule } from '../centered-panel/centered-panel.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MenuModule } from '../menu/menu.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CenteredPanelModule,
    RouterModule,
    MenuModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
