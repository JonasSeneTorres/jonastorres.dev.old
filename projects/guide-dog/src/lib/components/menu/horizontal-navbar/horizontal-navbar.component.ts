import { Component, Input, OnInit } from '@angular/core';

import { NavibarItemConfig } from 'projects/guide-dog/src/lib/types/navibar-item-config';

@Component({
  selector: 'gd-horizontal-navbar',
  templateUrl: './horizontal-navbar.component.html',
  styleUrls: ['./horizontal-navbar.component.scss'],
})
export class HorizontalNavbarComponent implements OnInit {
  @Input() nav: NavibarItemConfig[] = [];

  constructor() // private modalService: ModalService,
  // private router: Router
  {}

  ngOnInit(): void {}

  // navigate(commands: any[], extras?: NavigationExtras | undefined): void {
  //   this.modalService.close();
  //   this.router.navigate(commands, extras);
  // }
}
