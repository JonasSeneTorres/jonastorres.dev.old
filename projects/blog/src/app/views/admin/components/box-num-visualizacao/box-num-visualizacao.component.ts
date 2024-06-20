import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { MasterBaseComponent } from 'projects/guide-dog/src/lib/components/master-base/master-base.component';

@Component({
  selector: 'jt-box-num-visualizacao',
  templateUrl: './box-num-visualizacao.component.html',
  styleUrls: ['./box-num-visualizacao.component.scss'],
})
export class BoxNumVisualizacaoComponent extends MasterBaseComponent implements OnInit, OnDestroy {
  constructor(protected override injector: Injector) {
    super(injector);
  }
}
