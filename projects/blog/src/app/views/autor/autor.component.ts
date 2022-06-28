import { Component, OnInit } from '@angular/core';

import { LocalStorageService } from 'projects/guide-dog/src/lib/services/data-storage/local-storage/local-storage.service';
import { SessionStorageService } from 'projects/guide-dog/src/lib/services/data-storage/session-storage/session-storage.service';

@Component({
  selector: 'jt-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.scss'],
})
export class AutorComponent {
  constructor(private local: SessionStorageService) {
    this.local.set('LocalStorageService', { teste: 1 });
  }

}
