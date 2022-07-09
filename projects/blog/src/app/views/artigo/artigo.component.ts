import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, Component, OnInit } from '@angular/core';

import { PaginaArtigo } from './../../types/pagina-artigo';

@Component({
  selector: 'jt-artigo',
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.scss']
})
export class ArtigoComponent  {
  dadosArtigo: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute

    ) {
    console.log(this.router);
  }

  ngOnInit(): void {
    console.log('init ', this.route.snapshot);
    this.dadosArtigo = this.route.data.subscribe(
      sucesso => {
        console.log('aaaaaaaaa', sucesso)
        this.dadosArtigo = sucesso;
      }
    );
  }

  // ngAfterViewInit() {
  //   console.log('jmsadklçdj')
  //   console.log(this.router.url);
  // }
}
