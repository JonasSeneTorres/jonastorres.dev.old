import { Component, Injector, OnDestroy, OnInit, Type } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { AcessibilityService } from '../../services/acessibility/acessibility.service';

@Component({ template: '' })
export abstract class MasterBaseComponent implements OnInit, OnDestroy {
  protected _acessibilityService: AcessibilityService;
  protected _destroy$: Subject<boolean> = new Subject<boolean>();
  theme = 'ligth';
  zoom = 0;

  constructor(protected injector: Injector) {
    this._acessibilityService = injector.get<AcessibilityService>(AcessibilityService as Type<AcessibilityService>);
  }

  ngOnInit(): void {
    this.observeStateAcessibility();
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }

  setZoom(value: number): void {
    if (value === 0) {
      this.zoom = 0;
    } else {
      this.zoom += value;
    }

    this._acessibilityService.setZoom(this.zoom);
  }

  setTheme(value: 'ligth' | 'dark' | 'contrast') {
    this._acessibilityService.setTheme(value);
  }

  protected observeStateAcessibility(): void {
    this._acessibilityService.stateAcessibility$.pipe(takeUntil(this._destroy$)).subscribe((stateAcessibility: any) => {
      this.zoom = stateAcessibility.zoom;
      this.theme = stateAcessibility.theme;
    });
  }
}
