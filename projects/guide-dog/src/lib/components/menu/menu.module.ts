import { AcessibilityBarComponent } from './acessibility-bar/acessibility-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonHamburgerComponent } from './menu-hamburger/components/button-hamburger/button-hamburger.component';
import { CenteredPanelModule } from '../centered-panel/centered-panel.module';
import { CommonModule } from '@angular/common';
import { HorizontalMenuBurguerComponent } from './menu-hamburger/components/horizontal-menu-burguer/horizontal-menu-burguer.component';
import { HorizontalNavbarComponent } from './horizontal-navbar/horizontal-navbar.component';
import { MenuHamburgerComponent } from './menu-hamburger/menu-hamburger.component';
import { MenuListHorizontalComponent } from './horizontal-navbar/components/menu-list-horizontal/menu-list-horizontal.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VerticalMenuBurgerComponent } from './menu-hamburger/components/vertical-menu-burger/vertical-menu-burger.component';

@NgModule({
  declarations: [
    MenuHamburgerComponent,
    HorizontalNavbarComponent,
    AcessibilityBarComponent,
    ButtonHamburgerComponent,
    VerticalMenuBurgerComponent,
    HorizontalMenuBurguerComponent,
    MenuListHorizontalComponent,
  ],
  imports: [CommonModule, RouterModule, CenteredPanelModule],
  exports: [MenuHamburgerComponent, AcessibilityBarComponent, HorizontalNavbarComponent],
})
export class MenuModule {}
