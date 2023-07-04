import { CommonModule } from '@angular/common';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [UsersComponent, UserComponent, EditUserComponent],
  imports: [FormsModule, CommonModule, UserRoutingModule],
})
export class UserModule {}
