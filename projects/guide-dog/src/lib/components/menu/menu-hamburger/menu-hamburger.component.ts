import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gd-menu-hamburger',
  templateUrl: './menu-hamburger.component.html',
  styleUrls: ['./menu-hamburger.component.scss']
})
export class MenuHamburgerComponent implements OnInit {
  show = false;

  constructor() { }

  ngOnInit(): void {
  }

  displayMenu(event: Event, showModal: boolean) {
    event.stopPropagation()
    this.show = showModal;
  }

}
