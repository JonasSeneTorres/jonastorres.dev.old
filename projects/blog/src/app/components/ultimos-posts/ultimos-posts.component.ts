import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jt-ultimos-posts',
  templateUrl: './ultimos-posts.component.html',
  styleUrls: ['./ultimos-posts.component.scss']
})
export class UltimosPostsComponent {
  @Input() ultimosArtigos: any [] = [];

  constructor() { }
}
