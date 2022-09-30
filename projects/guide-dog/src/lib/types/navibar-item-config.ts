import { NavigationExtras } from '@angular/router';

export interface NavibarItemConfig {
  label: string;
  route?: any[];
  routeExtras?: NavigationExtras | undefined;
  children?: NavibarItemConfig[];
}
