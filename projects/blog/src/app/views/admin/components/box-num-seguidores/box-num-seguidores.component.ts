import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { MasterBaseComponent } from 'projects/guide-dog/src/lib/components/master-base/master-base.component';

@Component({
  selector: 'jt-box-num-seguidores',
  templateUrl: './box-num-seguidores.component.html',
  styleUrls: ['./box-num-seguidores.component.scss'],
})
export class BoxNumSeguidoresComponent extends MasterBaseComponent implements OnInit, OnDestroy {
  constructor(protected override injector: Injector) {
    super(injector);
  }
}
