import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { MasterBaseComponent } from 'projects/guide-dog/src/lib/components/master-base/master-base.component';

@Component({
  selector: 'jt-comentarios-recentes',
  templateUrl: './comentarios-recentes.component.html',
  styleUrls: ['./comentarios-recentes.component.scss'],
})
export class ComentariosRecentesComponent extends MasterBaseComponent implements OnInit, OnDestroy {
  constructor(protected override injector: Injector) {
    super(injector);
  }
}
