import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

import { Injectable } from '@angular/core';

export interface AuthResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponse>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD9wSzHUem_xXTpzcvank23OGz00zhJNXw`,
        { email, password, returnSecureToken: true }
      )
      .pipe(catchError(this.getErrorHandler));
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponse>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD9wSzHUem_xXTpzcvank23OGz00zhJNXw
    `,
        { email, password, returnSecureToken: true }
      )
      .pipe(catchError(this.getErrorHandler));
  }

  getErrorHandler(errorRes: HttpErrorResponse) {
    let errorMsg = 'An error occured';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMsg);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMsg = 'Email already exists';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMsg = 'Email not found';
        break;
      case 'INVALID_PASSWORD':
        errorMsg = 'Invalid password';
        break;
    }
    return throwError(errorMsg);
  }

  logout() {
    this.isLoggedIn = false;
  }

  isAuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 1000);
    });
  }
}
