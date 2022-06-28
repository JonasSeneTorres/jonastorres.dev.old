import { AfterViewInit, Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'jt-artigo',
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.scss']
})
export class ArtigoComponent  {

  constructor(private router: Router ) {
    console.log(this.router);
  }

  // ngOnInit(): void {
  //   // console.log('jmsadklçdj')
  //   // console.log(this.router.url);
  // }

  // ngAfterViewInit() {
  //   console.log('jmsadklçdj')
  //   console.log(this.router.url);
  // }
}
