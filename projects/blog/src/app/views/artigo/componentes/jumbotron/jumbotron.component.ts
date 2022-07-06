import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jt-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent {
  @Input() categoria = '';

  constructor() { }

  // ngOnInit(): void {
  // }

}
