import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postForm: FormGroup;
  posts: Post[] = [];
  error?: string;

  constructor(private postService: PostService) {
    this.postForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe((response: Post[]) => {
      // console.log(response);
      this.posts = response;
    }, (error) => {
      console.log(error);
      this.error = error.message;
    });
  }

  onPostAdded() {
    let postData: Post = this.postForm.value;
    this.postService.createPost(postData).subscribe((response) => {
      console.log(response);
      this.getPosts();
    }, (error) => {
      console.log(error);
      this.error = error.message;
    });
  }

  onClearPosts(event: Event) {
    event.preventDefault();
    this.postService.deletePosts().subscribe((response) => {
      console.log(response);
      this.getPosts();
    }, (error) => {
      console.log(error);
      this.error = error.message;
    });
  }

}
