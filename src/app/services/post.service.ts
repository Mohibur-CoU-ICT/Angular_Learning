import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Post } from "../models/post";

@Injectable({ providedIn: 'root' })
export class PostService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://angular-learning-10aec-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json';
  }

  getPosts() {
    return this.http.get<{ [key: string]: Post }>(this.url, {
      headers: new HttpHeaders({
        'custom-header': 'get-header'
      })
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
      })
    });
  }

  deletePosts() {
    return this.http.delete(this.url);
  }
}