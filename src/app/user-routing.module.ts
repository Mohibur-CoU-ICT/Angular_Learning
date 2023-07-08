import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './services/guards/auth.guard';
import { DeactiveGuardService } from './services/guards/deactivate-guard.service';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { UserResolveService } from './services/resolvers/user-resolve.service';
import { UsersComponent } from './users/users.component';

const userRoutes: Routes = [
  {
    path: '',
    component: UsersComponent,
    canActivate: [AuthGuard],
    children: [
      { path: ':id/:name', component: UserComponent },
      {
        path: ':id/:name/edit',
        component: EditUserComponent,
        canDeactivate: [DeactiveGuardService],
        resolve: { user: UserResolveService },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
