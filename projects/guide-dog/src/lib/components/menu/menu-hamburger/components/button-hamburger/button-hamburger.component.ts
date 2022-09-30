import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gd-button-hamburger',
  templateUrl: './button-hamburger.component.html',
  styleUrls: ['./button-hamburger.component.scss'],
})
export class ButtonHamburgerComponent {
  @Input() actived = false;

  constructor() {}

  changeIcon() {
    this.actived = !this.actived;
  }
}
