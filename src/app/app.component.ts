import { Component, OnDestroy, OnInit } from '@angular/core';

import { AuthService } from './services/guards/auth.service';
import { DummyService } from './services/dummy.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Angular_Learning';
  userAdded: boolean = false;
  userAddedSubscription!: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService,
    private dummyService: DummyService
  ) {}

  ngOnInit() {
    this.authService.autoLogin();
    this.dummyService.printLog('Hello from AppComponent');
    // this.userService.addUserEvent.subscribe(data => {
    //   this.userAdded = data;
    // });
  }

  onLoginClick() {
    // this.authService.login();
  }

  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this.userAddedSubscription.unsubscribe();
  }
}
