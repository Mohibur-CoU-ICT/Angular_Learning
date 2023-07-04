import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AlertModalComponent } from './shared/alert-modal/alert-modal.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { AuthModule } from './auth.module';
import { AuthService } from './services/guards/auth.service';
import { AuthTokenInterceptorService } from './services/auth-token-interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { CategoriesComponent } from './categories/categories.component';
import { DeactiveGuardService } from './services/guards/deactivate-guard.service';
import { FilterModule } from './filter.module';
import { HomeComponent } from './home/home.component';
import { LoggingInterceptorService } from './services/logging-interceptor.service';
import { NavigationComponent } from './navigation/navigation.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlaceholderDirective } from './shared/placeholder.directive';
import { PostModule } from './post.module';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RolesComponent } from './roles/roles.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { UserModule } from './user.module';
import { UserResolveService } from './services/resolvers/user-resolve.service';
import { UserService } from './services/user.service';

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
    UserModule,
    PostModule,
    AuthModule,
    FilterModule,
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
