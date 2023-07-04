import { EditUserComponent } from './edit-user/edit-user.component';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';
import { UserComponent } from './user/user.component';
import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [UsersComponent, UserComponent, EditUserComponent],
  imports: [UserRoutingModule, SharedModule],
})
export class UserModule {}
