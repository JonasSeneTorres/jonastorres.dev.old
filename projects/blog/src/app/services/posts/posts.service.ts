import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private baseURL: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  get(): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/posts`);
  }
}
