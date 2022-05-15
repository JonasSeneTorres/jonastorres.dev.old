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
        // style({ offset: 0, transform: 'translateX(0%)'}),
        // style({ offset: 0.04, transform: 'translateX(1.54%)'}),
        // style({ offset: 0.08, transform: 'translateX(0.66%)'}),
        // style({ offset: 0.18, transform: 'translateX(6.25%)'}),
        // style({ offset: 0.26, transform: 'translateX(1.63%)'}),
        // style({ offset: 0.46, transform: 'translateX(24.98%)'}),
        // style({ offset: 0.64, transform: 'translateX(1.99%)'}),
        // style({ offset: 0.76, transform: 'translateX(56.44%)'}),
        // style({ offset: 0.88, transform: 'translateX(89.11%)'}),
        // style({ offset: 1, transform: 'translateX(100%)'}),
      ]))),
      transition('true => false', animate('1000ms', keyframes([
        style({ offset: 0, transform: 'translateX(100%)' }),
        style({ offset: .12, transform: 'translateX(89.11%)' }),
        style({ offset: .24, transform: 'translateX(56.44%)' }),
        style({ offset: .36, transform: 'translateX(1.99%)' }),
        style({ offset: .54, transform: 'translateX(24.98%)' }),
        style({ offset: .74, transform: 'translateX(1.63%)' }),
        style({ offset: .82, transform: 'translateX(6.25%)' }),
        style({ offset: .92, transform: 'translateX(0.66%)' }),
        style({ offset: .96, transform: 'translateX(1.64%)' }),
        style({ offset: 1, transform: 'translateX(0%)' }),


        // 0% {
        //   transform: translateX(0%);
        // }

        // 12% {
        //   transform: translateX(-10.89%);
        // }

        // 24% {
        //   transform: translateX(-43.56%);
        // }

        // 36% {
        //   transform: translateX(-98.01%);
        // }

        // 54% {
        //   transform: translateX(-75.02%);
        // }

        // 74% {
        //   transform: translateX(-98.37%);
        // }

        // 82% {
        //   transform: translateX(-93.75%);
        // }

        // 92% {
        //   transform: translateX(-99.34%);
        // }

        // 96% {
        //   transform: translateX(-98.46%);
        // }

        // 100% {
        //   transform: translateX(-100%);
        // }


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
