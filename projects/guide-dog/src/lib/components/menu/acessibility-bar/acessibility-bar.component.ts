import { ActivatedRoute, ChildActivationEnd, NavigationEnd, Router, UrlSegment } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, filter, take, takeUntil } from 'rxjs';

@Component({
  selector: 'gd-acessibility-bar',
  templateUrl: './acessibility-bar.component.html',
  styleUrls: ['./acessibility-bar.component.scss'],
})
export class AcessibilityBarComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  url = '';

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.route.events
      .pipe(filter((typeEvent: any) => typeEvent instanceof NavigationEnd))
      .pipe(takeUntil(this._destroy$))
      .subscribe((event: any) => {
        const dirtyUrl = `${event.url}#`.split('#');
        this.url = dirtyUrl[0];
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }
}
