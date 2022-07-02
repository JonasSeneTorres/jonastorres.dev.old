import * as platform from 'platform';
import { Inject, Injectable, Optional } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SystemInformationService {
  private _window: any;
  private _platformInfo: any = {};
  private _scrollX: number = 0;
  private _scrollY: number = 0;
  private _fullScreenX: number = 0;
  private _fullScreenY: number = 0;
  private _usefullAreaBrowserX: number = 0;
  private _usefullAreaBrowserY: number = 0;
  private _centeredPanelArea: number = 0;
  private _centeredPanelMargin: number = 0;

  get os() {
    return {
      product: this._platformInfo?.product ?? '',
      manufacturer: this._platformInfo?.manufacturer ?? '',
      family: this._platformInfo?.os.family ?? '',
      version: this._platformInfo?.os.version ?? '',
      architecture: this._platformInfo?.os.architecture ?? '',
    };
  }

  get browser() {
    return {
      info: {
        name: this._platformInfo?.name ?? '',
        version: this._platformInfo?.version ?? '',
        prerelease: this._platformInfo?.prerelease ?? '',
        layout: this._platformInfo?.layout ?? '',
        description: this._platformInfo?.description ?? '',
        ua: this._platformInfo?.ua ?? '',
      },
      size: {
        height: this._usefullAreaBrowserY,
        width: this._usefullAreaBrowserX,
      },
      scrollPosition: {
        x: this._scrollX,
        y: this._scrollY,
      },
    };
  }

  get screen() {
    return {
      size: {
        height: this._fullScreenY,
        width: this._fullScreenX,
      },
      pixelRatio: Math.trunc(this._window.devicePixelRatio),
    };
  }

  get page() {
    return {
      location: this.document.location,
      size: {
        height: this._fullScreenY,
        width: this._fullScreenX,
        ItsGreaterThanCenterPanel: this._fullScreenX > this._centeredPanelArea,
      },
      centeredPanel: {
        area: this._centeredPanelArea,
        margin: this._centeredPanelMargin,
      },
    };
  }

  constructor(@Optional() @Inject(DOCUMENT) private document: Document) {
    this.updateInfos();
    try {
      this._window.addEventListener('resize', () => {
        this.updateInfos();
      });

      this._window.addEventListener('scroll', () => {
        this._scrollX = Math.trunc(this._window.pageXOffset);
        this._scrollY = Math.trunc(this._window.pageYOffset);
      });
    } catch (error) {}
  }

  private updateInfos() {
    this._window = this.document.defaultView;
    this._platformInfo = platform.parse(this._window.navigator.userAgent);

    this.updateScreenSizeInfos();
  }

  private updateScreenSizeInfos() {
    this._fullScreenX = this._window.screen.width;
    this._fullScreenY = this._window.screen.height;
    this._usefullAreaBrowserX = this.document.documentElement.clientWidth;
    this._usefullAreaBrowserY = this.document.documentElement.clientHeight;
    this._centeredPanelArea = this.calculateCenteredPanelArea();
    this._centeredPanelMargin = this.calculateCenteredPanelMargin();
  }

  private calculateCenteredPanelArea(): number {
    const gdMinContentBoxValue =
      getComputedStyle(document.body)
        .getPropertyValue('--gd-min-content-box')
        .replace('px', '') ?? '0';
    let output = parseInt(gdMinContentBoxValue, 10);

    if (output > this._fullScreenX) {
      output = this._fullScreenX;
    }

    if (this._fullScreenX > output) {
      output += 40;
    }

    return output;
  }

  private calculateCenteredPanelMargin(): number {
    const output = (this._fullScreenX - this._centeredPanelArea) / 2;

    if (output < 0) {
      return 0;
    }

    return output;
  }
}
