import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

import { ModalService } from 'projects/guide-dog/src/lib/services/modal/modal.service';
import { NavibarItemConfig } from 'projects/guide-dog/src/lib/types/navibar-item-config';

@Component({
  selector: 'gd-horizontal-menu-burguer',
  templateUrl: './horizontal-menu-burguer.component.html',
  styleUrls: ['./horizontal-menu-burguer.component.scss'],
  animations: [
    trigger('showHideBackgroundModal', [
      state(
        'true',
        style({
          transform: 'scaley(1)',
          top: '0'
        })
      ),
      state(
        'false',
        style({
          transform: 'scaley(0)',
          top: '-100vh'
        })
      ),

      transition(
        'false => true',
        animate('.2s 0s cubic-bezier(0.32, 0, 0.67, 0)')
      ),
      transition(
        'true => false',
        animate('0.1s 0s cubic-bezier(0.33, 1, 0.68, 1)')
      ),
    ]),

    trigger('openCloseHamburger', [
      state(
        'true',
        style({
          transform: 'translateX(0%)',
        })
      ),
      state(
        'false',
        style({
          transform: 'translateX(-100%)',
        })
      ),

      transition(
        'false => true',
        animate(
          '0.5s .2s',
          keyframes([
            style({ offset: 0, transform: 'translateX(-100%)' }),
            style({ offset: 0.04, transform: 'translateX(-100.04%)' }),
            style({ offset: 0.08, transform: 'translateX(-100.16%)' }),
            style({ offset: 0.14, transform: 'translateX(-100.17%)' }),
            style({ offset: 0.18, transform: 'translateX(-99,96%)' }),
            style({ offset: 0.26, transform: 'translateX(-99,42%)' }),
            style({ offset: 0.28, transform: 'translateX(-99.45%)' }),
            style({ offset: 0.4, transform: 'translateX(-101.56%)' }),
            style({ offset: 0.42, transform: 'translateX(-101.64%)' }),
            style({ offset: 0.56, transform: 'translateX(-95.37%)' }),
            style({ offset: 0.58, transform: 'translateX(-95.6%)' }),
            style({ offset: 0.72, transform: 'translateX(-113.12%)' }),
            style({ offset: 0.86, transform: 'translateX(-62.94%)' }),
            style({ offset: 1, transform: 'translateX(0%)' }),
          ])
        )
      ),
      transition(
        'true => false',
        animate(
          '1s 0s',
          keyframes([
            style({ offset: 0, transform: 'translateX(0%)' }),
            style({ offset: 0.16, transform: 'translateX(-132.27%)' }),
            style({ offset: 0.28, transform: 'translateX(-86.88%)' }),
            style({ offset: 0.44, transform: 'translateX(-104.63%)' }),
            style({ offset: 0.59, transform: 'translateX(-98.36%%)' }),
            style({ offset: 0.73, transform: 'translateX(-100.58%)' }),
            style({ offset: 0.88, transform: 'translateX(-99.8%)' }),
            style({ offset: 0.96, transform: 'translateX(-100%)' }),
          ])
        )
      ),
    ]),
  ],
})
export class HorizontalMenuBurguerComponent {
  @Input() nav: NavibarItemConfig[] = [];
  showBackground = false;
  showMenu = false;
  disabledButtom = false;

  constructor(private modalService: ModalService, private router: Router) {}

  displayOpacity(event: Event, showModal: boolean) {
    event.stopPropagation();

    if (showModal) {
      this.modalService.open();
      this.showBackground = showModal;
    } else {
      this.showMenu = false;
      this.modalService.close();
      setTimeout(() => {
        this.showBackground = showModal;
      }, 600);
    }

    this.disabledButtom = true;
    setTimeout(() => {
      this.disabledButtom = false;
    }, 1000);
  }

  navigate(commands: any[], extras?: NavigationExtras | undefined): void {
    this.showBackground = false;
    this.modalService.close();
    this.router.navigate(commands, extras);
  }

  showHideMenu() {
    this.showMenu = this.showBackground;;
  }
}
