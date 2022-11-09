import { Component, Injector, Input } from '@angular/core';
import { MasterBaseComponent } from 'projects/guide-dog/src/lib/components/master-base/master-base.component';

@Component({
  selector: 'jt-ultimos-posts',
  templateUrl: './ultimos-posts.component.html',
  styleUrls: ['./ultimos-posts.component.scss'],
})
export class UltimosPostsComponent extends MasterBaseComponent {
  @Input() ultimosArtigos: any[] = [];
  @Input() categorias: any[] = [];

  constructor(protected override injector: Injector) {
    super(injector);
  }

  obterNomeCategoria(item: any): string {
    return item.url.split('/')[2] ?? '';
  }
}
