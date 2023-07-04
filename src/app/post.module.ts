import { AuthGuard } from './services/guards/auth.guard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostsComponent } from './posts/posts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'posts',
        component: PostsComponent,
        canActivate: [AuthGuard],
      },
    ]),
  ],
})
export class PostModule {}
