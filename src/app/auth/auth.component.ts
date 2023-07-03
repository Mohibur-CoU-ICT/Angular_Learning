import { AuthResponse, AuthService } from '../services/guards/auth.service';
import {
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

import { AlertModalComponent } from '../shared/alert-modal/alert-modal.component';
import { PlaceholderDirective } from '../shared/placeholder.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnDestroy {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string | null = null;
  @ViewChild(PlaceholderDirective) alertHost!: PlaceholderDirective;
  closeSubscription!: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onFormSubmit(authForm: NgForm) {
    if (!authForm.valid) {
      return;
    }
    this.isLoading = true;
    let authObs: Observable<AuthResponse>;
    if (this.isLoginMode) {
      // perform login request call
      authObs = this.authService.login(
        authForm.value.email,
        authForm.value.password
      );
    } else {
      // perform signup request call
      authObs = this.authService.signup(
        authForm.value.email,
        authForm.value.password
      );
    }
    authObs.subscribe(
      (response) => {
        console.log(response);
        this.isLoading = false;
        this.router.navigate(['/']);
      },
      (errorMsg) => {
        this.isLoading = false;
        this.error = errorMsg;
        this.showErrorAlert(errorMsg);
      }
    );
  }

  showErrorAlert(message: string) {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        AlertModalComponent
      );
    this.alertHost.viewContainerRef.clear();
    const componentRef =
      this.alertHost.viewContainerRef.createComponent(componentFactory);
    componentRef.instance.error = message;
    this.closeSubscription = componentRef.instance.close.subscribe((_data) => {
      this.closeSubscription.unsubscribe();
      this.alertHost.viewContainerRef.clear();
    });
  }

  ngOnDestroy(): void {
    if (this.closeSubscription) {
      this.closeSubscription.unsubscribe();
    }
  }

  getPasswordErrors(password: NgModel) {
    if (password.errors!['required']) return 'Password is required';
    if (password.errors!['minlength']) return 'Password should be of length 6';
    return '';
  }
}
