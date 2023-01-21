import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs";
import { Post } from "../models/post";

@Injectable({ providedIn: 'root' })
export class PostService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://angular-learning-10aec-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json';
  }

  getPosts() {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('category', 'comment');
    queryParams = queryParams.append('type', 'all');

    return this.http.get<{ [key: string]: Post }>(this.url, {
      headers: new HttpHeaders({
        'custom-header': 'get-header'
      }),
      params: queryParams
    }).pipe(map((response) => {
      let posts: Post[] = [];
      for (let key in response) {
        // console.log(k);
        posts.push({ ...response[key], key });
      }
      return posts;
    }));
  }

  createPost(postData: Post) {
    return this.http.post<{ name: string }>(this.url, postData, {
      headers: new HttpHeaders({
        'custom-header': 'post-header'
      }),
      observe: 'response'
    });
  }

  deletePosts() {
    return this.http.delete(this.url, {
      observe: 'events',
      responseType: 'text'
    }).pipe(tap(response => {
      if (response.type === HttpEventType.Sent) {
        console.log('request sent');
      }
      if (response.type === HttpEventType.Response) {
        console.log(response.body);
      }
    }));
  }
}