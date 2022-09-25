import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LocalStorageService } from 'projects/guide-dog/src/lib/services/data-storage/local-storage/local-storage.service';
import {
  SessionStorageService,
} from 'projects/guide-dog/src/lib/services/data-storage/session-storage/session-storage.service';

import { CenteredPanelModule } from './components/centered-panel/centered-panel.module';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { MenuModule } from './components/menu/menu.module';
import { MemoryStorageService } from './services/data-storage/memory-storage/memory-storage.service';
import { ModalService } from './services/modal/modal.service';

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
