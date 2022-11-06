import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule } from './components/card/card.module';
import { CenteredPanelModule } from './components/centered-panel/centered-panel.module';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { MenuModule } from './components/menu/menu.module';
import { CookieStorageService } from './services/data-storage/cookie-storage/cookie-storage.service';
import { LocalStorageService } from './services/data-storage/local-storage/local-storage.service';
import { MemoryStorageService } from './services/data-storage/memory-storage/memory-storage.service';
import { SessionStorageService } from './services/data-storage/session-storage/session-storage.service';
import { ModalService } from './services/modal/modal.service';
import { SystemInformationService } from './services/system-information/system-information.service';
import { TextUtilService } from './services/text-util/text-util.service';
import { MasterBaseComponent } from './components/master-base/master-base.component';

@NgModule({
  declarations: [
    MasterBaseComponent
  ],
  imports: [CardModule, CenteredPanelModule, CommonModule, FooterModule, HeaderModule, MenuModule],
  providers: [
    CookieStorageService,
    LocalStorageService,
    MemoryStorageService,
    ModalService,
    SessionStorageService,
    SystemInformationService,
    TextUtilService,
  ],
  exports: [CardModule, CenteredPanelModule, FooterModule, HeaderModule, MenuModule],
})
export class GuideDogModule {}
