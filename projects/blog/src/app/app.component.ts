import { Component } from '@angular/core';
import { NavibarConfig } from './config/navibar.config';
import { NavibarItemConfig } from 'projects/guide-dog/src/lib/types/navibar-item-config';

@Component({
  selector: 'jt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menu: NavibarItemConfig[] = NavibarConfig;
}
