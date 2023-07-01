import { FormControl, NgForm, NgModel } from '@angular/forms';

import { AuthService } from '../services/guards/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode: boolean = true;

  constructor(private authService: AuthService) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onFormSubmit(authForm: NgForm) {
    if (!authForm.valid) {
      return;
    }
    if (this.isLoginMode) {
      // perform login request call
      this.authService;
    } else {
      // perform signup request call
      this.authService
        .signup(authForm.value.email, authForm.value.password)
        .subscribe(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }

  getPasswordErrors(password: NgModel) {
    if (password.errors!['required']) return 'Password is required';
    if (password.errors!['minlength']) return 'Password should be of length 6';
    return '';
  }
}
