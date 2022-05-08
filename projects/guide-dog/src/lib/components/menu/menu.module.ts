import { CommonModule } from '@angular/common';
import { MenuHamburgerComponent } from './menu-hamburger/menu-hamburger.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MenuHamburgerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuHamburgerComponent
  ],
})
export class MenuModule { }
