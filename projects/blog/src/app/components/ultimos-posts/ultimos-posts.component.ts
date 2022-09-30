import { Component, Input } from '@angular/core';

@Component({
  selector: 'jt-ultimos-posts',
  templateUrl: './ultimos-posts.component.html',
  styleUrls: ['./ultimos-posts.component.scss'],
})
export class UltimosPostsComponent {
  @Input() ultimosArtigos: any[] = [];
  @Input() categorias: any[] = [];

  constructor() {}

  obterNomeCategoria(indice: number) {
    const output = this.categorias.filter(
      item => item.id === this.ultimosArtigos[indice].categoriaId
    );

    return '';
  }

  pertenceACategoria(indice: number, nomeCategoria: string = '') {
    return this.obterNomeCategoria(indice) === nomeCategoria;
  }
}
