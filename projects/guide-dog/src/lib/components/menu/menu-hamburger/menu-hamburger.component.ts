import { Component, OnInit } from '@angular/core';

import { ModalService } from '../../../services/modal/modal.service'

@Component({
  selector: 'gd-menu-hamburger',
  templateUrl: './menu-hamburger.component.html',
  styleUrls: ['./menu-hamburger.component.scss']
})
export class MenuHamburgerComponent implements OnInit {
  show = false;

  constructor(
    private modalService: ModalService
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

}
