import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../learn-observable/Post';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class JSONPlaceholderDataService {
  constructor(private httpClient: HttpClient) {}

  getAllPostsFromPlaceholderApi(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
}
