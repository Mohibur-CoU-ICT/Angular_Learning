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
    this.http.get(this.url).pipe(map((response) => {
      let posts: Post[] = [];
      for (let k of Object.entries(response)) {
        // console.log(k);
        let post: Post = {
          key: k[0],
          title: k[1].title,
          content: k[1].content
        };
        posts.push(post);
      }
      return posts;
    })).subscribe((response) => {
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
