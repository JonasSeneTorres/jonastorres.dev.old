import { Component, Input, OnInit } from '@angular/core';

import { VitrineDados } from 'projects/blog/src/app/types/vitrine-dados.type';

@Component({
  selector: 'jt-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.scss'],
})
export class VitrineComponent {
  @Input() dados: VitrineDados = {};

  get ultimosArtigos(): any[] {
    return this.dados.ultimosArtigos ?? [];
  }

  constructor() {
    this.dados.ultimosArtigos;
  }
}
