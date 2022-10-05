import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

import { ModalService } from 'projects/guide-dog/src/lib/services/modal/modal.service';
import { NavibarItemConfig } from 'projects/guide-dog/src/lib/types/navibar-item-config';

@Component({
  selector: 'gd-vertical-menu-burger',
  templateUrl: './vertical-menu-burger.component.html',
  styleUrls: ['./vertical-menu-burger.component.scss'],
  animations: [
    trigger('showHideBackgroundModal', [
      state(
        'true',
        style({
          transform: 'scaley(1)',
          top: '0',
        })
      ),
      state(
        'false',
        style({
          transform: 'scaley(0)',
          top: '-100vh',
        })
      ),

      transition('false => true', animate('.2s 0s cubic-bezier(0.32, 0, 0.67, 0)')),
      transition('true => false', animate('0.1s 0s cubic-bezier(0.33, 1, 0.68, 1)')),
    ]),

    trigger('openCloseHamburger', [
      state(
        'true',
        style({
          transform: 'translateY(0%)',
        })
      ),
      state(
        'false',
        style({
          transform: 'translateY(-100%)',
        })
      ),

      transition('false => true', animate('0.5s 0s cubic-bezier(0.32, 0, 0.67, 0)')),
      transition(
        'true => false',
        animate(
          '0.5s 0s',
          keyframes([
            style({ offset: 0, transform: 'translateY(0%)' }),
            style({ offset: 0.16, transform: 'translateY(-132.27%)' }),
            style({ offset: 0.28, transform: 'translateY(-86.88%)' }),
            style({ offset: 0.44, transform: 'translateY(-104.63%)' }),
            style({ offset: 0.59, transform: 'translateY(-98.36%%)' }),
            style({ offset: 0.73, transform: 'translateY(-100.58%)' }),
            style({ offset: 0.88, transform: 'translateY(-99.8%)' }),
            style({ offset: 0.96, transform: 'translateY(-100%)' }),
          ])
        )
      ),
    ]),
  ],
})
export class VerticalMenuBurgerComponent {
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
      }, 400);
    }

    this.disabledButtom = true;
    setTimeout(() => {
      this.disabledButtom = false;
    }, 500);
  }

  navigate(commands: any[], extras?: NavigationExtras | undefined): void {
    this.showBackground = false;
    this.modalService.close();
    this.router.navigate(commands, extras);
  }

  showHideMenu() {
    this.showMenu = this.showBackground;
  }
}
