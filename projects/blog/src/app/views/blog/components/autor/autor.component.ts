import { Component, Input } from '@angular/core';

@Component({
  selector: 'jt-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.scss'],
})
export class AutorComponent {
  @Input() autor: any;
}
