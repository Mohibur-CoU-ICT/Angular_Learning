import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { Post } from '../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postForm: FormGroup;
  url: string;
  posts: Post[] = [];

  constructor(private http: HttpClient) {
    this.url = 'https://angular-learning-10aec-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json';
    this.postForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.http.get<{ [key: string]: Post }>(this.url).pipe(map((response) => {
      let posts: Post[] = [];
      for (let key in response) {
        // console.log(k);
        posts.push({ ...response[key], key});
      }
      return posts;
    })).subscribe((response: Post[]) => {
      // console.log(response);
      this.posts = response;
    });
  }

  onPostAdded() {
    let postData = this.postForm.value;
    this.http.post(this.url, postData).subscribe((response) => {
      console.log(response);
      this.getPosts();
    });
  }

}
