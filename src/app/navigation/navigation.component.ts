import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/guards/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.userSub.subscribe((user) => {
      this.isAuthenticated = user ? true : false;
    });
  }
}
