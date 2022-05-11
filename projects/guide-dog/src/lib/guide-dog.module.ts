import { NgModule, Renderer2 } from '@angular/core';

import { CenteredPanelModule } from './components/centered-panel/centered-panel.module';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { MenuModule } from './components/menu/menu.module';
import { ModalService } from './services/modal/modal.service';

@NgModule({
  declarations: [
  ],
  imports: [
    FooterModule,
    HeaderModule,
    CenteredPanelModule,
    MenuModule,
  ],
  providers: [
    ModalService,
    // Renderer2,
  ],
  exports: [
    FooterModule,
    HeaderModule,
    CenteredPanelModule,
    MenuModule,
  ]
})
export class GuideDogModule { }
