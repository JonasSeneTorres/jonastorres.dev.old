import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jt-box-artigo',
  templateUrl: './box-artigo.component.html',
  styleUrls: ['./box-artigo.component.scss']
})
export class BoxArtigoComponent /*implements OnInit*/ {
  @Input() artigo: any = null;
  constructor() { }

  // ngOnInit(): void {
  // }

}
