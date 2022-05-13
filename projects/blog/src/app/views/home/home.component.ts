import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { LocalStorageService } from './../../../../../guide-dog/src/lib/services/local-storage/local-storage.service';
import { PostsService } from '../../services/posts/posts.service';

@Component({
  selector: 'jt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  post: any;
  post2: any;
  @ViewChild('dataContainer') dataContainer: ElementRef = new ElementRef({});

  loadData(data: any) {
      this.dataContainer.nativeElement.innerHTML = data;
  }

  constructor(
    private postsService: PostsService,
    // private sanitizer: DomSanitizer
    ) {

    }

  ngOnInit(): void {
    this.postsService.get().subscribe(
      sucesso => {
        this.post = sucesso[0].text;
        console.log(sucesso)
        // this.post2 = this.sanitizer.bypassSecurityTrustHtml(
        //   sucesso[0].text
        // );
      }
    )
  }



  // ngAfterViewInit() {
  //   this.postsService.get().subscribe(
  //     sucesso => {
  //       this.post = sucesso[0].text;
  //       this.post2 = this.domSanitizerService.sanitize(sucesso[0].text)
  //       this.loadData(sucesso[0].text);
  //       console.log(sucesso)
  //     }
  //   )
  // }

}
