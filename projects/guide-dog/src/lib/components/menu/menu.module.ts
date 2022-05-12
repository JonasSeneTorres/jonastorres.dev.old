import { AcessibilityBarComponent } from './acessibility-bar/acessibility-bar.component';
import { CenteredPanelModule } from '../centered-panel/centered-panel.module';
import { CommonModule } from '@angular/common';
import { HorizontalNavbarComponent } from './horizontal-navbar/horizontal-navbar.component';
import { MenuHamburgerComponent } from './menu-hamburger/menu-hamburger.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MenuHamburgerComponent,
    HorizontalNavbarComponent,
    AcessibilityBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CenteredPanelModule,
  ],
  exports: [
    MenuHamburgerComponent,
    HorizontalNavbarComponent,
    AcessibilityBarComponent,
  ],
})
export class MenuModule { }
