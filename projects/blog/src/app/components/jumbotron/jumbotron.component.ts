import { Component } from '@angular/core';
import { JumbotronService } from 'projects/blog/src/app/services/jumbotron/jumbotron.service';
import { Observable } from 'rxjs';

import { Jumbotron } from './../../types/jumbotron.type';

@Component({
  selector: 'jt-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss'],
})
export class JumbotronComponent {
  dadosJumbotron$: Observable<Jumbotron>;

  constructor(private jumbotronService: JumbotronService) {
    this.dadosJumbotron$ = this.jumbotronService.dadosJumbotron$;
  }
}
