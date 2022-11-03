import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'gd-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  private window: Window | null;

  url = '';

  constructor(private route: Router, @Inject(DOCUMENT) private document: Document) {
    this.window = this.document.defaultView;
  }

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

  gotoUp() {
    if (this.window) {
      this.window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    const a = this.document.querySelectorAll('button.hamburger, a.gd-header__link')[0] as HTMLElement;
    a.focus({ preventScroll: true });
  }
}
