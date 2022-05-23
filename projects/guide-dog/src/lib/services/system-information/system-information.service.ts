import * as platform from 'platform';

import { Inject, Injectable, Optional } from '@angular/core';

import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
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
  private _fullBodyX: number = 0;
  private _fullBodyY: number = 0;
  private _centeredPanelArea: number = 0;
  private _centeredPanelMargin: number = 0;

  get os() {
    return {
      product: this._platformInfo?.product ?? '',
      manufacturer: this._platformInfo?.manufacturer ?? '',
      family: this._platformInfo?.os.family ?? '',
      version: this._platformInfo?.os.version ?? '',
      architecture: this._platformInfo?.os.architecture ?? '',
    }
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
      }
    };
  }

  // get scrollPosition() {
  //   return {
  //     x: this._scrollX,
  //     y: this._scrollY,
  //   }
  // }

  get screen() {
    return {
      size: {
        height: this._fullScreenY,
        width: this._fullScreenX,
      },
      pixelRatio: Math.trunc(this._window.devicePixelRatio)
    }
  }

  get page() {
    return {
      location: this.document.location,
      size: {
        height: this._fullScreenY,
        width: this._fullScreenX,
      },
      centeredPanel: {
        area: this._centeredPanelArea,
        margin: this._centeredPanelMargin
      }
    }
  }

  // get screen() {
  //   return {
  //   }
  // }

  get size() {
    return {
      screen: {
        x: this._fullScreenX,
        y: this._fullScreenY,
      },
      browser: {
        x: this._usefullAreaBrowserX,
        y: this._usefullAreaBrowserY,
      },
      page: {
        x: this._fullBodyX,
        y: this._fullBodyY
      },
      CenteredPanel: {
        area: this._centeredPanelArea,
        margin: this._centeredPanelMargin
      },
    }
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
    } catch (error) {

    }
  }

  private updateInfos() {
    this._window = this.document.defaultView;
    this._platformInfo = platform.parse(this._window.navigator.userAgent);
    this.updateScreenSizeInfos();
  }

  private updateScreenSizeInfos() {
    let centeredPanelArea = getComputedStyle(document.body).getPropertyValue('--theme-base-primary-color-h');
    if (centeredPanelArea === '') {
      centeredPanelArea = '0';
      // console.log(centeredPanelArea)
    }
    this._fullScreenX = this._window.screen.width;
    this._fullScreenY = this._window.screen.height;
    this._usefullAreaBrowserX = this._window.innerWidth;
    this._usefullAreaBrowserY = this._window.innerHeight;
    this._fullBodyX = this.document.body.scrollWidth;
    this._fullBodyY = this.document.body.scrollHeight;
    this._centeredPanelArea = parseInt(centeredPanelArea, 10) ?? 0;
    this._centeredPanelMargin = (this._fullScreenX - this._centeredPanelArea) / 2;
  }
}
