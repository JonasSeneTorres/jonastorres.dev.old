import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

import { ModalService } from '../../../services/modal/modal.service'
import { NavibarItemConfig } from 'projects/guide-dog/src/lib/types/navibar-item-config';

@Component({
  selector: 'gd-menu-hamburger',
  templateUrl: './menu-hamburger.component.html',
  styleUrls: ['./menu-hamburger.component.scss'],
  animations: [
    trigger('openCloseHamburger', [
      state('true', style({
        transform: 'translateX(100%)'
      })),
      state('false', style({
        transform: 'translateX(0%)'
      })),

      transition('false => true', animate('1000ms', keyframes([
        style({ offset: 0, transform: 'translateX(0%)'}),
        style({ offset: .16, transform: 'translateX(132.27%)' }),
        style({ offset: .28, transform: 'translateX(86.88%)'  }),
        style({ offset: .44, transform: 'translateX(104.63%)'  }),
        style({ offset: .59, transform: 'translateX(98.36%)',  }),
        style({ offset: .73, transform: 'translateX(100.58%)' }),
        style({ offset: .88, transform: 'translateX(99.8%)' }),
        style({ offset: 1, transform: 'translateX(100%)' }),
      ]))),
      transition('true => false', animate('1000ms', keyframes([
        style({ offset: 0, transform: 'translateX(100%)' }),
        style({ offset: .16, transform: 'translateX(99.8%)' }),
        style({ offset: .28, transform: 'translateX(100.58%)' }),
        style({ offset: .44, transform: 'translateX(98.36%)' }),
        style({ offset: .59, transform: 'translateX(104.63%)' }),
        style({ offset: .73, transform: 'translateX(86.88%)' }),
        style({ offset: .88, transform: 'translateX(132.27%)' }),
        style({ offset: 1, transform: 'translateX(0%)' }),
      ]))),
    ]),
  ]
})



export class MenuHamburgerComponent implements OnInit {
  @Input() nav: NavibarItemConfig[] = [];
  show = false;
  disabledButtom = false;

  constructor(
    private modalService: ModalService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  displayMenu(event: Event, showModal: boolean) {
    event.stopPropagation();

    if(showModal) {
      this.modalService.open();
    } else {
      this.modalService.close();
    }

    this.show = showModal;
    this.disabledButtom = true;
    setTimeout(() => {
      this.disabledButtom = false;
    }, 1000);
  }

  navigate(commands: any[], extras?: NavigationExtras | undefined): void {
    this.show = false;
    this.modalService.close();
    this.router.navigate(commands, extras);
  }

}
