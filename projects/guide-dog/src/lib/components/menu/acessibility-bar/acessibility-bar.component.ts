import { DOCUMENT } from '@angular/common';
import { Component, Inject, Injector, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, takeUntil } from 'rxjs';

import { MasterBaseComponent } from '../../master-base/master-base.component';

@Component({
  selector: 'gd-acessibility-bar',
  templateUrl: './acessibility-bar.component.html',
  styleUrls: ['./acessibility-bar.component.scss'],
})
export class AcessibilityBarComponent extends MasterBaseComponent implements OnInit, OnDestroy {
  private window: Window | null;

  url = '';

  constructor(protected override injector: Injector, @Inject(DOCUMENT) private document: Document, private route: Router) {
    super(injector);
    this.window = this.document.defaultView;
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.observeRoute();
  }

  moveTo(querySelector: string, event: Event) {
    const element = this.document.querySelector(querySelector) as HTMLElement;
    let position = this.getPosition(element);

    if (querySelector === '#conteudo') {
      position = position - 48;
    }

    if (this.window) {
      this.window.scrollTo({
        top: position,
        behavior: 'smooth',
      });

      event.stopPropagation();
      event.preventDefault();

      this.setFocus(querySelector);
    }
  }

  private observeRoute(): void {
    this.route.events
      .pipe(
        filter((typeEvent: any) => typeEvent instanceof NavigationEnd),
        takeUntil(this._destroy$)
      )
      .subscribe((event: any) => {
        const dirtyUrl = `${event.url}#`.split('#');
        this.url = dirtyUrl[0];
      });
  }

  private setFocus(querySelector: string) {
    let selector = `${querySelector} a, ${querySelector} button, ${querySelector} input`;
    let element = this.document.querySelector(selector) as HTMLElement;

    if (!element) {
      element = this.document.querySelector(`${querySelector} div div`) as HTMLElement;
    }

    element.focus({ preventScroll: true });
  }

  private getPosition(element: HTMLElement): number {
    const rect = element.getBoundingClientRect();
    return rect.top + window.scrollY;
  }
}
