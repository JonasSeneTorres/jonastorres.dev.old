import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

import { ArtigosService } from './../../services/artigos/artigos.service';

@Component({
  selector: 'jt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  post: any;
  post2: any;
  @ViewChild('dataContainer') dataContainer: ElementRef = new ElementRef({});

  loadData(data: any) {
    this.dataContainer.nativeElement.innerHTML = data;
  }

  constructor(
    private artigosService: ArtigosService
  ) // private sanitizer: DomSanitizer
  {}

  ngOnInit(): void {
    this.artigosService.obter(1).subscribe((sucesso: any) => {
      this.post = sucesso[0].text;
    });
  }

  // ngAfterViewInit() {
  //   this.postsService.get().subscribe(
  //     sucesso => {
  //       this.post = sucesso[0].text;
  //       this.post2 = this.domSanitizerService.sanitize(sucesso[0].text)
  //       this.loadData(sucesso[0].text);
  //     }
  //   )
  // }
}
