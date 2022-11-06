import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { LocalStorageService } from '../data-storage/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AcessibilityService {
  private value = {
    zoom: 0,
    theme: 'ligth',
  };
  private _stateAcessibility$: BehaviorSubject<any> = new BehaviorSubject(this.value);

  get stateAcessibility$() {
    return this._stateAcessibility$.asObservable();
  }

  constructor(@Inject(DOCUMENT) private document: Document, private localStorageService: LocalStorageService) {
    this.value.zoom = this.localStorageService.get('zoom');
    this.value.theme = this.localStorageService.get('theme');
    this.changeZoom();
  }

  setZoom(value: number): void {
    if (-2 > value || value > 4) {
      return;
    }

    this.value.zoom = value;
    this.saveValue();
    this.changeZoom();
  }

  setTheme(value: 'ligth' | 'dark' | 'contrast'): void {
    this.value.theme = value;
    this.saveValue();
  }

  private saveValue(): void {
    this.localStorageService.set('theme', this.value.theme);
    this.localStorageService.set('zoom', this.value.zoom);
    this._stateAcessibility$.next(this.value);
  }

  private changeZoom() {
    const incrementInPx = 2;
    let nextSize: number = 16;
    nextSize = 16 + this.value.zoom * incrementInPx;
    const root = this.document.querySelector(':root') as HTMLElement;
    root.style.setProperty('--gd_font-base-size', `${nextSize}px`);
  }
}
