import { DOCUMENT } from '@angular/common';
import { Component, Inject, Injector, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, takeUntil } from 'rxjs';

import { MasterBaseComponent } from '../master-base/master-base.component';

@Component({
  selector: 'gd-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent extends MasterBaseComponent implements OnInit, OnDestroy {
  private window: Window | null;

  url = '';

  constructor(protected override injector: Injector, private route: Router, @Inject(DOCUMENT) private document: Document) {
    super(injector);
    this.window = this.document.defaultView;
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.route.events
      .pipe(filter((typeEvent: any) => typeEvent instanceof NavigationEnd))
      .pipe(takeUntil(this._destroy$))
      .subscribe((event: any) => {
        const dirtyUrl = `${event.url}#`.split('#');
        this.url = dirtyUrl[0];
      });
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
