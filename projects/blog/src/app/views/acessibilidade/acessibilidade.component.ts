import { Component, OnInit } from '@angular/core';

import { SystemInformationService } from 'projects/guide-dog/src/lib/services/system-information/system-information.service';

@Component({
  selector: 'jt-acessibilidade',
  templateUrl: './acessibilidade.component.html',
  styleUrls: ['./acessibilidade.component.scss']
})
export class AcessibilidadeComponent implements OnInit {

  constructor(public browserService: SystemInformationService) { }

  ngOnInit(): void {
  }

}
