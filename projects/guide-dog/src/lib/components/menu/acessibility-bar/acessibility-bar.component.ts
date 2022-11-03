import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'gd-acessibility-bar',
  templateUrl: './acessibility-bar.component.html',
  styleUrls: ['./acessibility-bar.component.scss'],
})
export class AcessibilityBarComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  private window: Window | null;

  zoom = 0;
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

  setZoom(value: number): void {
    let nextSize: number = 16;
    if (value === 0) {
      this.zoom = 0;
    } else {
      const incrementInPx = 2;
      this.zoom += value;
      // eslint-disable-next-line prettier/prettier
      nextSize = 16 + (this.zoom * incrementInPx);
    }

    const root = this.document.querySelector(':root') as HTMLElement;
    root.style.setProperty('--gd_font-base-size', `${nextSize}px`);
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
