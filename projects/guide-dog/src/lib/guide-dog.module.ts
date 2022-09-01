import { NgModule, Renderer2 } from '@angular/core';

import { CenteredPanelModule } from './components/centered-panel/centered-panel.module';
import { CommonModule } from '@angular/common';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { LocalStorageService } from 'projects/guide-dog/src/lib/services/data-storage/local-storage/local-storage.service';
import { MemoryStorageService } from './services/data-storage/memory-storage/memory-storage.service';
import { MenuModule } from './components/menu/menu.module';
import { ModalService } from './services/modal/modal.service';
import { SessionStorageService } from 'projects/guide-dog/src/lib/services/data-storage/session-storage/session-storage.service';

@NgModule({
  declarations: [
  ],
  imports: [
    FooterModule,
    HeaderModule,
    CenteredPanelModule,
    MenuModule,
    CommonModule,
  ],
  providers: [
    LocalStorageService,
    MemoryStorageService,
    ModalService,
    SessionStorageService,
  ],
  exports: [
    FooterModule,
    HeaderModule,
    CenteredPanelModule,
    MenuModule,
  ]
})
export class GuideDogModule { }
