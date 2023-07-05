import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertModalComponent } from './shared/alert-modal/alert-modal.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { CategoriesComponent } from './categories/categories.component';
import { CoreModule } from './core.module';
import { FilterModule } from './filter.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlaceholderDirective } from './shared/placeholder.directive';
import { PostModule } from './post.module';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RolesComponent } from './roles/roles.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { UserModule } from './user.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RolesComponent,
    CategoriesComponent,
    PageNotFoundComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    NavigationComponent,
    AlertModalComponent,
    PlaceholderDirective,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    UserModule,
    PostModule,
    AuthModule,
    FilterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
