import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule } from './components/card/card.module';
import { CenteredPanelModule } from './components/centered-panel/centered-panel.module';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { MenuModule } from './components/menu/menu.module';
import { LocalStorageService } from './services/data-storage/local-storage/local-storage.service';
import { MemoryStorageService } from './services/data-storage/memory-storage/memory-storage.service';
import { SessionStorageService } from './services/data-storage/session-storage/session-storage.service';
import { ModalService } from './services/modal/modal.service';

@NgModule({
  declarations: [],
  imports: [FooterModule, HeaderModule, CenteredPanelModule, MenuModule, CommonModule, CardModule],
  providers: [LocalStorageService, MemoryStorageService, ModalService, SessionStorageService],
  exports: [FooterModule, HeaderModule, CenteredPanelModule, MenuModule, CardModule],
})
export class GuideDogModule {}
