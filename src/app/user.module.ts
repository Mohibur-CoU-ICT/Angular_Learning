import { CommonModule } from '@angular/common';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [UsersComponent, UserComponent, EditUserComponent],
  imports: [FormsModule, RouterModule, CommonModule],
  exports: [UsersComponent, UserComponent, EditUserComponent],
})
export class UserModule {}
