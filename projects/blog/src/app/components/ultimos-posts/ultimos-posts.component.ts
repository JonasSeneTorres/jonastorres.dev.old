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

  obterNomeCategoria(item: any): string {
    console.log('aaaaa: ', item);
    return item.url.split('/')[2] ?? '';
    // const output = this.categorias; //.filter(item => item.id === this.ultimosArtigos[indice].categoriaId);
    // console.log('output: ', output);
    // return output[0];
  }

  pertenceACategoria(indice: number, nomeCategoria: string = '') {
    // console.log('jdsakh', indice, nomeCategoria, this.ultimosArtigos);
    // return this.obterNomeCategoria(indice) === nomeCategoria;
  }
}
