import { Component, Injector } from '@angular/core';
import { JumbotronService } from 'projects/blog/src/app/services/jumbotron/jumbotron.service';
import { MasterBaseComponent } from 'projects/guide-dog/src/lib/components/master-base/master-base.component';
import { Observable } from 'rxjs';

import { Jumbotron } from './../../types/jumbotron.type';

@Component({
  selector: 'jt-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss'],
})
export class JumbotronComponent extends MasterBaseComponent {
  dadosJumbotron$: Observable<Jumbotron>;

  constructor(protected override injector: Injector, private jumbotronService: JumbotronService) {
    super(injector);
    this.dadosJumbotron$ = this.jumbotronService.dadosJumbotron$;
  }
}
