import { Component, Input } from '@angular/core';

@Component({
  selector: 'jt-ultimos-posts',
  templateUrl: './ultimos-posts.component.html',
  styleUrls: ['./ultimos-posts.component.scss'],
})
export class UltimosPostsComponent {
  @Input() ultimosArtigos: any[] = [];
  @Input() categorias: any[] = [];

  obterNomeCategoria(item: any): string {
    return item.url.split('/')[2] ?? '';
  }
}
