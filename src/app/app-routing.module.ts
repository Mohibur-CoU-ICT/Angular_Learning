import { RouterModule, Routes } from '@angular/router';

import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { page: 1, search: 'Mohibur' } },
  {
    path: 'users',
    loadChildren: () => import('./user.module').then((m) => m.UserModule),
  },
  {
    path: 'posts',
    loadChildren: () => import('./post.module').then((m) => m.PostModule),
  },
  { path: 'categories', component: CategoriesComponent },
  { path: 'template-form', component: TemplateFormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
