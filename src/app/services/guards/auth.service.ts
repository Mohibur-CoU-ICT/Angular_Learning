import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/user.model';

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
  userSub = new BehaviorSubject<User>(null!);

  constructor(private http: HttpClient, private router: Router) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponse>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD9wSzHUem_xXTpzcvank23OGz00zhJNXw`,
        { email, password, returnSecureToken: true }
      )
      .pipe(catchError(this.getErrorHandler), tap(this.hadleUser.bind(this)));
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponse>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD9wSzHUem_xXTpzcvank23OGz00zhJNXw
    `,
        { email, password, returnSecureToken: true }
      )
      .pipe(catchError(this.getErrorHandler), tap(this.hadleUser.bind(this)));
  }

  private hadleUser(response: AuthResponse) {
    const expireDate = new Date(
      new Date().getTime() + +response.expiresIn * 1000
    );
    const user = new User(
      response.email,
      response.localId,
      response.idToken,
      expireDate
    );
    this.userSub.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
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

  autoLogin() {
    let userData: {
      email: string;
      _token: string;
      localId: string;
      expirationDate: string;
    } = JSON.parse(localStorage.getItem('userData')!);

    if (!userData) {
      return;
    }

    let user = new User(
      userData.email,
      userData.localId,
      userData._token,
      new Date(userData.expirationDate)
    );

    if (user.token) {
      this.userSub.next(user);
    }
  }

  logout() {
    this.userSub.next(null!);
    this.router.navigate(['/auth']);
  }

  isAuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 1000);
    });
  }
}
