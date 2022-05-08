import { CenteredPanelModule } from './components/centered-panel/centered-panel.module';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { MenuModule } from './components/menu/menu.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
  ],
  imports: [
    FooterModule,
    HeaderModule,
    CenteredPanelModule,
    MenuModule,
  ],
  exports: [
    FooterModule,
    HeaderModule,
    CenteredPanelModule,
    MenuModule,
  ]
})
export class GuideDogModule { }
