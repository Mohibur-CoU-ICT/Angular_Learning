import { AuthResponse, AuthService } from '../services/guards/auth.service';
import { FormControl, NgForm, NgModel } from '@angular/forms';

import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string = '';

  constructor(private authService: AuthService) {}

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
      this.authService;
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
      },
      (errorMsg) => {
        this.isLoading = false;
        this.error = errorMsg;
      }
    );
  }

  getPasswordErrors(password: NgModel) {
    if (password.errors!['required']) return 'Password is required';
    if (password.errors!['minlength']) return 'Password should be of length 6';
    return '';
  }
}
