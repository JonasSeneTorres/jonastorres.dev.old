import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { MasterBaseComponent } from 'projects/guide-dog/src/lib/components/master-base/master-base.component';

@Component({
  selector: 'jt-box-num-posts',
  templateUrl: './box-num-posts.component.html',
  styleUrls: ['./box-num-posts.component.scss'],
})
export class BoxNumPostsComponent extends MasterBaseComponent implements OnInit, OnDestroy {
  constructor(protected override injector: Injector) {
    super(injector);
  }
}
