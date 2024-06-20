import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { MasterBaseComponent } from 'projects/guide-dog/src/lib/components/master-base/master-base.component';

@Component({
  selector: 'jt-artigos-recentes',
  templateUrl: './artigos-recentes.component.html',
  styleUrls: ['./artigos-recentes.component.scss'],
})
export class ArtigosRecentesComponent extends MasterBaseComponent implements OnInit, OnDestroy {
  constructor(protected override injector: Injector) {
    super(injector);
  }
}
