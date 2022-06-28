import {
  ActivatedRoute,
  ChildActivationEnd,
  NavigationEnd,
  Router,
  UrlSegment,
} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter, take } from 'rxjs';

@Component({
  selector: 'gd-acessibility-bar',
  templateUrl: './acessibility-bar.component.html',
  styleUrls: ['./acessibility-bar.component.scss'],
})
export class AcessibilityBarComponent implements OnInit {
  url = '';

  constructor(private route: Router)
  {}

  ngOnInit(): void {
    this.route.events.pipe(
      filter((typeEvent: any) => typeEvent instanceof NavigationEnd)
    )
      .subscribe((event: any) => {
        const dirtyUrl = `${event.url}#`.split('#');
        this.url = dirtyUrl[0];
      });
  }
}
