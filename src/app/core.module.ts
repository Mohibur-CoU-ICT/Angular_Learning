import { AuthGuardService } from './services/guards/auth-guard.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { AuthTokenInterceptorService } from './services/auth-token-interceptor.service';
import { DeactiveGuardService } from './services/guards/deactivate-guard.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggingInterceptorService } from './services/logging-interceptor.service';
import { NgModule } from '@angular/core';
import { UserResolveService } from './services/resolvers/user-resolve.service';
import { UserService } from './services/user.service';

@NgModule({
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
    AuthGuardService,
    DeactiveGuardService,
    UserService,
    UserResolveService,
  ],
})
export class CoreModule {}
