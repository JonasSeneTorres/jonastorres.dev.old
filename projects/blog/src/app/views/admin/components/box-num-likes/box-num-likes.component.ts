import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { MasterBaseComponent } from 'projects/guide-dog/src/lib/components/master-base/master-base.component';

@Component({
  selector: 'jt-box-num-likes',
  templateUrl: './box-num-likes.component.html',
  styleUrls: ['./box-num-likes.component.scss'],
})
export class BoxNumLikesComponent extends MasterBaseComponent implements OnInit, OnDestroy {
  constructor(protected override injector: Injector) {
    super(injector);
  }
}
