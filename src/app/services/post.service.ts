import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { map, switchMap, take, tap } from 'rxjs';

import { AuthService } from './guards/auth.service';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({ providedIn: 'root' })
export class PostService {
  url: string;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.url =
      'https://angular-learning-10aec-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json';
  }

  getPosts() {
    return this.authService.userSub.pipe(
      take(1),
      switchMap((user) => {
        console.log(user);
        let queryParams = new HttpParams();
        queryParams = queryParams.append('auth', user.token!);
        return this.http.get<{ [key: string]: Post }>(this.url, {
          params: queryParams,
        });
      }),
      map((response) => {
        let posts: Post[] = [];
        for (let key in response) {
          // console.log(k);
          posts.push({ ...response[key], key });
        }
        return posts;
      })
    );
  }

  createPost(postData: Post) {
    return this.http.post<{ name: string }>(this.url, postData, {
      headers: new HttpHeaders({
        'custom-header': 'post-header',
      }),
      observe: 'response',
    });
  }

  deletePosts() {
    return this.http
      .delete(this.url, {
        observe: 'events',
        responseType: 'text',
      })
      .pipe(
        tap((response) => {
          if (response.type === HttpEventType.Sent) {
            console.log('request sent');
          }
          if (response.type === HttpEventType.Response) {
            console.log(response.body);
          }
        })
      );
  }
}
