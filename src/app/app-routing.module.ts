import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriesComponent } from "./categories/categories.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuardService } from "./services/guards/auth-guard.service";
import { DeactiveGuardService } from "./services/guards/deactivate-guard.service";
import { UserComponent } from "./user/user.component";
import { UsersComponent } from "./users/users.component";

const routes: Routes = [
  { path: '', component: HomeComponent, data: { page: 1, search: 'Mohibur' } },
  {
    path: 'users',
    component: UsersComponent,
    canActivateChild: [AuthGuardService],
    children: [
      { path: ':id/:name', component: UserComponent },
      { path: ':id/:name/edit', component: EditUserComponent, canDeactivate: [DeactiveGuardService] }
    ],
  },
  { path: 'categories', component: CategoriesComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}