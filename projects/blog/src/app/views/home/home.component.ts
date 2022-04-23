import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts/posts.service';

@Component({
  selector: 'jt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  post: any;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.get().subscribe(
      sucesso => {
        this.post = sucesso[0].text;
        console.log(sucesso)
      }
    )
  }

}
