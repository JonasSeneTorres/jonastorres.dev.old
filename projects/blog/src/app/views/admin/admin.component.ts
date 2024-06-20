import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterBaseComponent } from 'projects/guide-dog/src/lib/components/master-base/master-base.component';
import { BreadcrumbsItem } from 'projects/guide-dog/src/lib/types/breadcrumbs-item.type';

@Component({
  selector: 'jt-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent extends MasterBaseComponent implements OnInit, OnDestroy {
  breadcrumbsItem: BreadcrumbsItem[];

  constructor(
    // private _artigosService: ArtigosService,
    // private _categoriasService: CategoriasService,
    // private _autoresService: AutoresService,
    // private _blogService: BlogService,
    // private _jumbotronService: JumbotronService,
    // private _activatedRoute: ActivatedRoute,
    private router: Router,
    protected override injector: Injector
  ) {
    super(injector);
    // ) {

    // this._blogService.tornarBoxPrincipalTransparente(true);
    this.breadcrumbsItem = [];
  }
}
