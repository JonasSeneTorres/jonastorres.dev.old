import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, filter, takeUntil } from 'rxjs';

@Component({
  selector: 'gd-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  url = '';

  constructor(private route: Router){}

  ngOnInit(): void {
    this.route.events.pipe(
      filter((typeEvent: any) => typeEvent instanceof NavigationEnd)
    )
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
