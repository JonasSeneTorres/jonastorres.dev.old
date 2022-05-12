import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { ModalService } from '../../../services/modal/modal.service'
import { NavibarItemConfig } from 'projects/guide-dog/src/lib/types/navibar-item-config';

@Component({
  selector: 'gd-menu-hamburger',
  templateUrl: './menu-hamburger.component.html',
  styleUrls: ['./menu-hamburger.component.scss']
})
export class MenuHamburgerComponent implements OnInit {
  @Input() nav: NavibarItemConfig[] = [];
  show = false;

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
  }

  navigate(commands: any[], extras?: NavigationExtras | undefined): void {
    this.show = false;
    this.modalService.close();
    this.router.navigate(commands, extras);
  }

}
