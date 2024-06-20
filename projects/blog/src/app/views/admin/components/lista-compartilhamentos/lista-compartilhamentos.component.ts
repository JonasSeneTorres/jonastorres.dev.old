import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { MasterBaseComponent } from 'projects/guide-dog/src/lib/components/master-base/master-base.component';

@Component({
  selector: 'jt-lista-compartilhamentos',
  templateUrl: './lista-compartilhamentos.component.html',
  styleUrls: ['./lista-compartilhamentos.component.scss'],
})
export class ListaCompartilhamentosComponent extends MasterBaseComponent implements OnInit, OnDestroy {
  constructor(protected override injector: Injector) {
    super(injector);
  }
}
