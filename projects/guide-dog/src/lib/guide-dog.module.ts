import { NgModule, Renderer2 } from '@angular/core';

import { CenteredPanelModule } from './components/centered-panel/centered-panel.module';
import { CookieService } from 'ngx-cookie-service';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { LocalStorageService } from 'projects/guide-dog/src/lib/services/local-storage/local-storage.service';
import { MemoryStorageService } from './services/memory-storage/memory-storage.service';
import { MenuModule } from './components/menu/menu.module';
import { ModalService } from './services/modal/modal.service';
import { SessionStorageService } from 'projects/guide-dog/src/lib/services/session-storage/session-storage.service';

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
    CookieService,
    LocalStorageService,
    MemoryStorageService,
    ModalService,
    SessionStorageService,

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
