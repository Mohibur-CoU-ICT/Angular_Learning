import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { AuthService } from './services/guards/auth.service';
import { AuthTokenInterceptorService } from './services/auth-token-interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { CategoriesComponent } from './categories/categories.component';
import { DeactiveGuardService } from './services/guards/deactivate-guard.service';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterPipesComponent } from './filter-pipes/filter-pipes.component';
import { HomeComponent } from './home/home.component';
import { LoadingSpinnerCompponent } from './shared/loading-spinner/loading-spinner.component';
import { LoggingInterceptorService } from './services/logging-interceptor.service';
import { NavigationComponent } from './navigation/navigation.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './posts/posts.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RolesComponent } from './roles/roles.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { TemplateFormComponent } from './template-form/template-form.component';
import { UserComponent } from './user/user.component';
import { UserResolveService } from './services/resolvers/user-resolve.service';
import { UserService } from './services/user.service';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    RolesComponent,
    CategoriesComponent,
    UserComponent,
    EditUserComponent,
    PageNotFoundComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    FilterPipesComponent,
    ShortenPipe,
    FilterPipe,
    PostsComponent,
    AuthComponent,
    LoadingSpinnerCompponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    // order matters; first place first execution
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptorService,
      multi: true,
    },
    AuthService,
    AuthGuardService,
    DeactiveGuardService,
    UserService,
    UserResolveService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
