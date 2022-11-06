import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Injector,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { SystemInformationService } from 'projects/guide-dog/src/lib/services/system-information/system-information.service';
import { Subject, takeUntil, throttleTime } from 'rxjs';

import { NavibarItemConfig } from '../../types/navibar-item-config';
import { MasterBaseComponent } from '../master-base/master-base.component';

@Component({
  selector: 'gd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends MasterBaseComponent implements OnInit, AfterViewInit, OnDestroy {
  private _navBoxElement: Element;
  private changeSize = new Subject();
  @Input() navConfig: NavibarItemConfig[] = [];
  greatherThanLayoutBreak = false;
  navboxWithAcceptableSize = true;

  get centeredPanelMargin() {
    const sizeAdjustment = -2;
    return this.systemInformation.page.centeredPanel.margin + sizeAdjustment;
  }

  get showHamburgerHorizontalNav(): boolean {
    const hasNavConfig = this.navConfig.length > 0;
    const centeredPanelMarginPositive = this.centeredPanelMargin > 0;
    this.greatherThanLayoutBreak = this.systemInformation.page.size.ItsGreaterThanCenterPanel;

    return hasNavConfig && (centeredPanelMarginPositive || this.greatherThanLayoutBreak);
  }

  constructor(
    protected override injector: Injector,
    private elementRef: ElementRef,
    private systemInformation: SystemInformationService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    super(injector);
    this._navBoxElement = this.elementRef.nativeElement;

    this.changeSize
      .asObservable()
      .pipe(throttleTime(1000))
      .pipe(takeUntil(this._destroy$))
      .subscribe(() => {
        this.navboxWithAcceptableSize = this.checkAcceptableSizeNavbox();
        this.changeDetectorRef.detectChanges();
      });
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  ngAfterViewInit(): void {
    this.onResize();
  }

  @HostListener('window:resize', ['$event.target'])
  public onResize(target: any = {}) {
    this.changeSize.next(target);
  }

  private checkAcceptableSizeNavbox(): boolean {
    if (this.systemInformation.browser.size.width < 1024) {
      return false;
    }

    const acceptableSizeLineInPixel = 24;
    const heigthNavBox = this.elementRef.nativeElement.querySelector('.gd-h-navbar')?.offsetHeight ?? 0;

    return heigthNavBox <= 2 * acceptableSizeLineInPixel - 1;
  }
}
