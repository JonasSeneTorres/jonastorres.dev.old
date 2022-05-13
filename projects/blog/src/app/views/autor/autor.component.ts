import { Component, OnInit } from '@angular/core';

import { LocalStorageService } from 'projects/guide-dog/src/lib/services/local-storage/local-storage.service';
import { SessionStorageService } from 'projects/guide-dog/src/lib/services/session-storage/session-storage.service';

@Component({
  selector: 'jt-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.scss']
})
export class AutorComponent implements OnInit {

  constructor(

    private local: SessionStorageService
  ) {
    console.warn('teste')
      this.local.set('LocalStorageService', { teste: 1 })
      console.log('storage:', this.local.get('LocalStorageService'));
  }

  ngOnInit(): void {
  }

}
