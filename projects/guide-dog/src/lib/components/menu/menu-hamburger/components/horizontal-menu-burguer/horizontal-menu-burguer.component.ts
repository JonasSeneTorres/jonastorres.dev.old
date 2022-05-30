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
          // backgroundColor: 'rgba(0, 0, 0, 0.2)',
          transform: 'scaley(1)',
          top: '0'
        })
      ),
      state(
        'false',
        style({
          // backgroundColor: 'rgba(0, 0, 0, 0)',
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
          // transform: 'translateX(100%)',
          transform: 'translateX(0%)',
        })
      ),
      state(
        'false',
        style({
          // transform: 'translateX(0%)',
          transform: 'translateX(-100%)',
        })
      ),

      transition(
        'false => true',
        animate(
          '1s .2s',
          keyframes([
            // style({ offset: 0, transform: 'translateX(0%)' }),
            // style({ offset: 0.16, transform: 'translateX(132.27%)' }),
            // style({ offset: 0.28, transform: 'translateX(86.88%)' }),
            // style({ offset: 0.44, transform: 'translateX(104.63%)' }),
            // style({ offset: 0.59, transform: 'translateX(98.36%)' }),
            // style({ offset: 0.73, transform: 'translateX(100.58%)' }),
            // style({ offset: 0.88, transform: 'translateX(99.8%)' }),
            // style({ offset: 1, transform: 'translateX(100%)' }),
          ])
        )
      ),
      transition(
        'true => false',
        animate(
          '.5s 0s',
          keyframes([
            // style({ offset: 0, transform: 'translateX(100%)' }),
            // style({ offset: 0.12, transform: 'translateX(89.11%)' }),
            // style({ offset: 0.24, transform: 'translateX(56.44%)' }),
            // style({ offset: 0.36, transform: 'translateX(1.99%)' }),
            // style({ offset: 0.54, transform: 'translateX(24.98%)' }),
            // style({ offset: 0.74, transform: 'translateX(1.63%)' }),
            // style({ offset: 0.82, transform: 'translateX(6.25%)' }),
            // style({ offset: 0.92, transform: 'translateX(0.66%)' }),
            // style({ offset: 0.96, transform: 'translateX(1.64%)' }),
            // style({ offset: 1, transform: 'translateX(0%)' }),
          ])
        )
      ),
    ]),
  ],
})
export class HorizontalMenuBurguerComponent implements OnInit {
  @Input() nav: NavibarItemConfig[] = [];
  showBackground = false;
  showMenu = false;
  disabledButtom = false;

  constructor(private modalService: ModalService, private router: Router) {}

  ngOnInit(): void {}

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
    }, 1000);
  }

  navigate(commands: any[], extras?: NavigationExtras | undefined): void {
    this.showBackground = false;
    this.modalService.close();
    this.router.navigate(commands, extras);
  }

  showHideMenu() {
    // if (this.showBackground) {
      this.showMenu = this.showBackground;
    // }
    // this.showMenu = this.showBackground;
  }
}
