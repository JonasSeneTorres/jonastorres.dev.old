import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gd-button-hamburger',
  templateUrl: './button-hamburger.component.html',
  styleUrls: ['./button-hamburger.component.scss']
})
export class ButtonHamburgerComponent implements OnInit {
  @Input() actived = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeIcon() {
    this.actived = !this.actived;
  }

}
