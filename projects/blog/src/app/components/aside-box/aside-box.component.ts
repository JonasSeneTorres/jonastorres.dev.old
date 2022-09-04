import { Component, OnInit } from '@angular/core';

import { CategoriasService } from '../../services/categorias/categorias.service';

@Component({
  selector: 'jt-aside-box',
  templateUrl: './aside-box.component.html',
  styleUrls: ['./aside-box.component.scss']
})
export class AsideBoxComponent
implements OnInit
{
  categorias: any[] = [];

  constructor(private categoriasService: CategoriasService,) { }

  ngOnInit(): void {
    this.categoriasService.listar().subscribe(
      (sucesso) => {
        this.categorias = sucesso;
      }
    );
  }
}
