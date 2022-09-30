import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private _showModal = false;
  private renderer: Renderer2;
  private scrollPosition: number = 0;

  get showModal(): boolean {
    return this._showModal;
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _rendererFactory: RendererFactory2
  ) {
    this.renderer = _rendererFactory.createRenderer(null, null);
  }

  open() {
    if (this._showModal) {
      return;
    }
    const body = this.document.body;

    this.scrollPosition =
      (window.pageYOffset || document.documentElement.scrollTop) - 70;

    this.renderer.addClass(body, 'modal-open');
    this._showModal = true;
  }

  close() {
    if (!this._showModal) {
      return;
    }

    this.scrollPosition = 0;
    this.renderer.removeClass(this.document.body, 'modal-open');

    this._showModal = false;
  }
}
