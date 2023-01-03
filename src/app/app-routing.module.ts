import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriesComponent } from "./categories/categories.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { FilterPipesComponent } from "./filter-pipes/filter-pipes.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PostsComponent } from "./posts/posts.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { AuthGuardService } from "./services/guards/auth-guard.service";
import { DeactiveGuardService } from "./services/guards/deactivate-guard.service";
import { UserResolveService } from "./services/resolvers/user-resolve.service";
import { TemplateFormComponent } from "./template-form/template-form.component";
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
      { path: ':id/:name/edit', component: EditUserComponent, canDeactivate: [DeactiveGuardService], resolve: { user: UserResolveService } }
    ],
  },
  { path: 'categories', component: CategoriesComponent },
  { path: 'template-form', component: TemplateFormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'filter-pipes', component: FilterPipesComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}